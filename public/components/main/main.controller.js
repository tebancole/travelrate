(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$state','$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();


    vm.cerrarSesion = ()=>{
      servicioLogin.cerrarSesion();

    }    
    vm.usuarioActivo = servicioUsuarios.getUsuarioActivo();
    
  }
})();