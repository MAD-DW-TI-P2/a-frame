AFRAME.registerComponent('collision-detect', { 
  init: function () {
    // Al iniciar
    this.el.addEventListener('collide', function(e){
        document.querySelector('#suelo').setAttribute('color', 'yellow');
        console.log('collide caja gr');
    });
  },
  tick: function () {
    // Cada rato
    // console.log('tick');
  }
});

AFRAME.registerComponent('collision-detect-gato', { 
  init: function () {
    // Al iniciar
    this.el.addEventListener('collide', function(e){
        console.log('collide con gato');
    });
  },
  tick: function () {
    // Cada rato
    // console.log('tick');
  }
});

AFRAME.registerComponent('limit-camera', { 
  init: function () {
    this.el.addEventListener('collide', function(e){
        // La colisión solo se detecta si el objeto tiene el atributo dynamic-body
        console.log('collide camera');
        // Podría detectar con quién colisiona y hacer algo
        // Usa una arrow function para mantener el contexto de `this` si es necesario
        // this.collided = false;
        // this.el.addEventListener('collide', (e) => {
        //   console.log('Collide with', e.detail.body.el.id); // Muestra con qué ha colisionado
        //   if (e.detail.body.el.id === "user") {
        //     console.log('Collide with user');
        //     this.collided = true; // Marca que ha habido una colisión
        //   }
        // });
    });
  },
  tick: function () {
    if(this.el.object3D.position.z > 1){
      console.log('limit-camera por posición, no por colisión');
      this.el.object3D.position.z = 1;
      // Podría mapear un escenario con límites mapeando x y z. si x es mayor que 1, z no puede ser mayor que 1
    }
  }
});

AFRAME.registerComponent('play-all-model-animations', {
  init: function () {
    this.model = null;
    this.mixer = null;
    var model = this.el.getObject3D('mesh');
    if (model) {
      this.load(model);
    } else {
      this.el.addEventListener('model-loaded', (e) => this.load(e.detail.model));
    }
  },
  load: function (model) {
    this.model = model;
    this.mixer = new THREE.AnimationMixer(model);
    this.model.animations.forEach(animation => {
      this.mixer.clipAction(animation, model).play();
    });
  },
  tick: function (t, dt) {
    if (this.mixer && !isNaN(dt)) {
      this.mixer.update(dt / 1000);
    }
  }
});