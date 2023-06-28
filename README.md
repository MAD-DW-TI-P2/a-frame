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
