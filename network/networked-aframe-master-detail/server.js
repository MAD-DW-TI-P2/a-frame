// Load required modules
const http = require("http");                 // http server core module
const path = require("path");
const express = require("express");           // web framework external module
const socketIo = require("socket.io");        // web socket external module
const easyrtc = require("open-easyrtc");
const cors = require('cors');      // EasyRTC external module

// Set process name
process.title = "networked-aframe-server";

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();

app.use(express.static("public"));
app.use(cors({ origin: '*', credentials: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' }));




// Start Express http server
const webServer = http.createServer(app);

// Start Socket.io so it attaches itself to Express server
// socketIo.listen(webServer, {"log level": 1}): Esta línea inicializa un servidor de Socket.IO y lo asocia con un servidor web existente. Socket.IO es una biblioteca que permite la comunicación en tiempo real, bidireccional y basada en eventos entre los navegadores web y los servidores. La comunicación puede realizarse sobre WebSocket o utilizando otras técnicas de transporte de larga duración como long polling cuando los WebSocket no están disponibles.
// http://localhost:8080/socket.io/?EIO=3&transport=polling&t=Om5HCY1
const socketServer = socketIo.listen(webServer, {"log level": 1});

socketServer.use((socket, next) => {
    // Aquí puedes añadir la lógica del middleware, por ejemplo, verificación de autenticación
    console.log('Middleware de Socket.IO para la conexión:', socket.id);
    //console.log(socket);
    next();
    
    // // Ejemplo de condición para proceder con la conexión
    // if (true /* reemplaza con tu condición */) {
    //     next();
    // } else {
    //     next(new Error('Error de autenticación'));
    // }
});

socketServer.on('connection', (socket) => {
    console.log('Un cliente se ha conectado y ha mandado un mensaje de chat');
  
    socket.on('chat message', (msg) => {
      console.log('Mensaje de chat recibido:', msg, socket.id);
  
      // Opcional: retransmitir el mensaje a todos los clientes conectados
      socketServer.emit('chat message', msg);
  
      // Aquí también puedes manejar la lógica para guardar el mensaje en una base de datos
    });
  });





// myIceServers: Este arreglo contiene la configuración de los servidores ICE (Interactive Connectivity Establishment) que se utilizarán para facilitar la conexión peer-to-peer (P2P) entre los navegadores en aplicaciones WebRTC. WebRTC (Web Real-Time Communication) es una tecnología que permite a las aplicaciones web y móviles comunicarse en tiempo real utilizando API estándares en los navegadores y dispositivos móviles sin necesidad de plugins externos.
// Estos servidores STUN de Google son gratuitos y comúnmente usados para aplicaciones de desarrollo y pruebas. No necesitas más que las URLs para usarlos.
const myIceServers = [
  {"urls":"stun:stun1.l.google.com:19302"},
  {"urls":"stun:stun2.l.google.com:19302"},
//   {
//     "urls":"turn:[ADDRESS]:[PORT]",
//     "username":"[USERNAME]",
//     "credential":"[CREDENTIAL]"
//   },
//   {
//     "urls":"turn:[ADDRESS]:[PORT][?transport=tcp]",
//     "username":"[USERNAME]",
//     "credential":"[CREDENTIAL]"
//   }
];
easyrtc.setOption("appIceServers", myIceServers);
easyrtc.setOption("logLevel", "debug");
easyrtc.setOption("demosEnable", false);

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
// Se sobrescribe el listener de autenticación por defecto para manejar las credenciales de manera personalizada. Esto permite verificar y almacenar credenciales proporcionadas por el usuario antes de permitirle unirse a las comunicaciones en tiempo real.
easyrtc.events.on("easyrtcAuth", (socket, easyrtcid, msg, socketCallback, callback) => {
    easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, (err, connectionObj) => {
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
            callback(err, connectionObj);
            return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {"isShared":false});

        console.log("["+easyrtcid+"] Credential saved!", connectionObj.getFieldValueSync("credential"));

        callback(err, connectionObj);
    });
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", (connectionObj, roomName, roomParameter, callback) => {
    console.log("["+connectionObj.getEasyrtcid()+"] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
    easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
});

// Start EasyRTC server
// EasyRTC: Se inicia el servidor EasyRTC, que se adjunta al servidor HTTP y a Socket.IO, preparando el sistema para manejar comunicaciones WebRTC.
easyrtc.listen(app, socketServer, null, (err, rtcRef) => {
    console.log("Initiated");

    rtcRef.events.on("roomCreate", (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
        console.log("roomCreate fired! Trying to create: " + roomName);

        appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
    });
});

// Listen on port
webServer.listen(port, () => {
    console.log("listening on http://localhost:" + port);
});