(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorListarUsuario', controladorListarUsuario);
  
    controladorListarUsuario.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService'];
  
    function controladorListarUsuario($http, $state, $stateParams, $location, servicioUsuarios, imageService,) {

      let vm = this;

      vm.rol = servicioUsuarios.getRol();

      vm.listaUsuarios = servicioUsuarios.getUsuarios();

      console.log('hoteles',vm.listaUsuarios);

      vm.modificar = (ususario) =>{
        $state.go('modificarUsuario', {objUsuarioTemp: JSON.stringify(ususario) });
      };
      
      
      
    } 
})();