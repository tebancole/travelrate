(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorLogin', controladorLogin);

  controladorLogin.$inject = ['$state','$location', 'servicioLogin'];

  function controladorLogin($state, $location, servicioLogin) {
    let vm = this;
    
    vm.usuario = {};


    vm.inicarSesion = (pCredenciales) => {
      let inicioCorrecto = servicioLogin.inicioSesion(pCredenciales);

      if (inicioCorrecto == true) {
        // swal("Datos correctos", "Sesion iniciada correctamente", "success");
          $location.path('main/dashboard');
      }
      else {
        swal("Datos erroneos", "Intente nuevamente", "error");
      }
    }



  }
})();