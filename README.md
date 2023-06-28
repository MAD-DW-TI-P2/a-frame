# a-frame-basics

1. Getting Started

https://aframe.io/docs/1.4.0/introduction/#getting-started

- Visual inspector: Open up any A-Frame scene, hit <ctrl> + <alt> + i or <ctrl> + <option> + i, and fly around to peek under the hood!
- Entity-Component Architecture: A-Frame is a powerful three.js framework, providing a declarative, composable, reusable entity-component structure. HTML is just the tip of the iceberg; developers have unlimited access to JavaScript, DOM APIs, three.js, WebVR, and WebGL.

Estructura: Entidad (a-entity), los componentes (Los atributos de las etiquetas) y las propiedades

<code>
<a-entity ${componentName}="${propertyName1}: ${propertyValue1}; ${propertyName2}: ${propertyValue2}">
</code>

For example, we have <a-entity> and attach the geometry, material, light, and position components with various properties and property values:

<code>
<a-entity geometry="primitive: sphere; radius: 1.5"
          light="type: point; color: white; intensity: 2"
          material="color: white; shader: flat; src: glow.jpg"
          position="0 0 -5"></a-entity>
</code>

2. Podemos poner una imagen 3D en el fondo. Para que se cargue tenemos que ejecutar nuestro archivo en un servidor.

- Generarla con IA: https://skybox.blockadelabs.com/
- Generarlas con el teléfono: https://panoraven.com/en

3. Animaciones de elementos

https://aframe.io/docs/1.4.0/components/animation.html

4. Movimiento de cámara con botones

Meter Boostrap, manejar el DOM, modificar propiedades de elementos

TODO

- Crear escuchadores cuando me pongo encima
- Añadir formas dinámicamente
- Organiar colisiones
- Meter en tiddly

