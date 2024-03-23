/* global AFRAME, THREE */
AFRAME.registerComponent('miposition', {
  schema: {
    radius: {type: 'number', default: 1}
  },
  init: function() {
    el = this.el;
    el.setAttribute('rotation', {x: 0, y: 180, z:0});
    el.setAttribute('position', {x: 0, y: -2.7, z:0});
    //el.getObject3D('mesh').material.color.set( 0xffffff * Math.random() );
    //el.material.color.set( 0xffffff * Math.random() );

    // var angleRad = this.getRandomAngleInRadians();
    // var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
    // var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
    // el.setAttribute('position', worldPoint);
    // // console.log('world point', worldPoint);

    // var angleDeg = angleRad * 180 / Math.PI;
    // var angleToCenter = -1 * angleDeg + 90;
    // angleRad = THREE.MathUtils.degToRad(angleToCenter);
    // el.object3D.rotation.set(0, angleRad, 0);
    // // console.log('angle deg', angleDeg);
  }

  // getRandomAngleInRadians: function() {
  //   return Math.random()*Math.PI*2;
  // },

  // randomPointOnCircle: function (radius, angleRad) {
  //   var x = Math.cos(angleRad)*radius;
  //   var y = Math.sin(angleRad)*radius;
  //   return {x: x, y: y};
  // }
});

// /* global AFRAME, THREE */
// AFRAME.registerComponent('name', {
//   schema: {
//     name: {type: 'string', default: 'jorge'}
//   },
//   init: function() {
//     el = this.el;
//     el.setAttribute('name', 'Jorge');
//   }
// });