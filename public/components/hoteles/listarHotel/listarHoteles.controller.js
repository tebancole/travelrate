(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorListarHoteles', controladorListarHoteles);
  
    controladorListarHoteles.$inject = ['$state', '$stateParams', '$location', 'servicioHoteles'];
  
    function controladorListarHoteles($state, $stateParams, $location, servicioHoteles) {
      let vm = this;




}
})();