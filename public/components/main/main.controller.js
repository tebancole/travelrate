(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$state','$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();
    ('prueba', servicioUsuarios.getRol());

    vm.cerrarSesion = ()=>{
      servicioLogin.cerrarSesion();

    }    
    vm.usuarioActivo = servicioUsuarios.getUsuarioActivo();

    $(document).ready(function () {
      var imagecollection = [
        { src: '../../sources/images/img1.jpg'},
        { src: '../../sources/images/img2.jpg'},
        { src: '../../sources/images/img3.jpg'},
        { src: '../../sources/images/img4.jpg'},
        { src: '../../sources/images/img5.jpg'},
        { src: '../../sources/images/slide3.jpg'},
        { src: '../../sources/images/slide4.jpg'}
        /* Slideshow not working? Check your image links. */
      ];

      $("#bg").vegas({
        slides: imagecollection,
        transition: [ 'fade', 'zoomOut', 'swirlLeft' ],
        preloadImage: true,
        timer: false,
        shuffle: true,
        animation: 'kenburns',
        cover: true
      });
    });
    
  }
})();