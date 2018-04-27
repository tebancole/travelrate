(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorSobreCompania', controladorSobreCompania);
  
    controladorSobreCompania.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioUsuarios','servicioHoteles'];
  
    function controladorSobreCompania($http, $state, $stateParams, $location, servicioUsuarios, servicioHoteles) {
      let vm = this;
  
      vm.rol = servicioUsuarios.getRol();
  }

})();