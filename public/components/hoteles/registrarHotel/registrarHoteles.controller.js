(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorRegistrarHoteles', controladorRegistrarHoteles);
  
    controladorRegistrarHoteles.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioHoteles', 'imageService', 'Upload', 'NgMap', 'servicioUsuarios'];
  
    function controladorRegistrarHoteles($http, $state, $stateParams, $location, servicioHoteles, imageService, Upload, NgMap,servicioUsuarios) {
      let vm = this;

      vm.rol = servicioUsuarios.getRol();



}
})();