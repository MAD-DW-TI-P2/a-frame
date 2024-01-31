AFRAME.registerComponent('collision-detect', { 
  init: function () {
    var ent = this.el;
    this.el.addEventListener('collide', function(e){
        console.log('collide');
        //document.querySelector('#box-b').setAttribute('color', 'red');
        console.log(e);
    });
  },
  tick: function () {
    //console.log('tick');
  }
});

AFRAME.registerComponent('limit-camera', { 
  tick: function () {
    console.log('tick');
    console.log(this);
    console.log(this.el.object3D.position);
    if(this.el.object3D.position.z > 1){
      console.log('limit-camera')
      this.el.object3D.position.z = 1;
    }
  }
});