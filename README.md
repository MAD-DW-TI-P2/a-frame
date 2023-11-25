# Intro A-frame

### 1. Getting Started

- https://aframe.io/docs/1.4.0/introduction/#getting-started
- Visual inspector: Open up any A-Frame scene, hit <ctrl> + <alt> + i or <ctrl> + <option> + i, and fly around to peek under the hood!
- Entity-Component Architecture: A-Frame is a powerful three.js framework, providing a declarative, composable, reusable entity-component structure. HTML is just the tip of the iceberg; developers have unlimited access to JavaScript, DOM APIs, three.js, WebVR, and WebGL. Estructura: Entidad (a-entity), los componentes (Los atributos de las etiquetas) y las propiedades <a-entity ${componentName}="${propertyName1}: ${propertyValue1}; ${propertyName2}: ${propertyValue2}">. For example, we have <a-entity> and attach the geometry, material, light, and position components with various properties and property values:

```
<a-entity geometry="primitive: sphere; radius: 1.5"
          light="type: point; color: white; intensity: 2"
          material="color: white; shader: flat; src: glow.jpg"
          position="0 0 -5"></a-entity>
```

### 2. Podemos poner una imagen 3D en el fondo.

- Para que se cargue tenemos que ejecutar nuestro archivo en un servidor
- Generarla con IA: https://skybox.blockadelabs.com/
- Generarlas con el teléfono: https://panoraven.com/en

### 3. Animaciones de elementos

- https://aframe.io/docs/1.4.0/components/animation.html

### 4. Movimiento de cámara con botones

- Meter Boostrap, manejar el DOM, modificar propiedades de elementos

### 5. Crear escuchadores a eventos 

- Añadir en la escena: cursor="rayOrigin: mouse" y crear un componente con funciones

- https://aframe.io/docs/1.4.0/components/cursor.html

### 6. Meter objetos

- Info: https://aframe.io/docs/1.4.0/components/obj-model.html

- Formato 1. glTF is a standard file format for three-dimensional scenes and models. A glTF file uses one of two possible file extensions: . gltf (JSON/ASCII) or . glb (binary). Es el jpg del 3D también funciona en Unity y Unreal. Pesa menos y va todo es un mismo archivo.

- Formato 2. OBJ https://en.wikipedia.org/wiki/Wavefront_.obj_file

### 7. Añadir elementos

### 8. Interacciónes con la cámara

- Meter el <cursor> en la cámara y crear un componente https://aframe.io/docs/1.4.0/components/cursor.html

- Quitar el atributo animation de una entidad para que se pare

### 9. Tamaños y posiciones relativas. Meter entidades dentro de otras

### 10. Entender la rotación y animarla disparando al hombre

### 11. Volar en ordenador (No funciona en VR)

### 12. Controles de mando

```
<script src="https://gftruj.github.io/webzamples/aframe/controls/oculus-thumbstick-controls.js"></script>
<a-entity oculus-touch-controls="hand: left" oculus-thumbstick-controls></a-entity>
<a-entity oculus-touch-controls="hand: right" oculus-thumbstick-controls></a-entity>
```

### 13. Animar el perrito

el.setAttribute('animation-mixer', {clip: "Walk"});
```<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v4.1.1/dist/aframe-extras.min.js"></script>
```

### 14. Multiusuario
https://glitch.com/edit/#!/base-project-naf

