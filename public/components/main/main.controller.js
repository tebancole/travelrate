(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorMain', controladorMain);

  controladorMain.$inject = ['$state', '$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();
    console.log('prueba', servicioUsuarios.getRol());

    vm.cerrarSesion = () => {
      servicioLogin.cerrarSesion();

    }
    vm.usuarioActivo = servicioUsuarios.getUsuarioActivo();

    // $(document).ready(function () {
    //   var imagecollection = [
    //     { src: '../../sources/images/fondo1.png' },
    //     { src: '../../sources/images/fondo1.png' }
    //   ];

    //   $("#bg").vegas({
    //     slides: imagecollection,
    //     transition: ['fade', 'zoomOut', 'swirlLeft'],
    //     preloadImage: true,
    //     timer: false,
    //     shuffle: true,
    //     animation: 'kenburns',
    //     cover: true
    //   });
    // });


  }
})();