(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorModificarUsuario', controladorModificarUsuario);
  
    controladorModificarUsuario.$inject = ['$http', '$state', '$stateParams', 'servicioUsuarios'];
  
    function controladorModificarUsuario($http, $state, $stateParams,servicioUsuarios) {

      let vm = this;

      vm.rol = servicioUsuarios.getRol();

      vm.modificarUsuario = {};

      let objUsuarioAModificar = JSON.parse($stateParams.objUsuarioTemp);

      let objNuevoUsuario = new Usuario (objUsuarioAModificar.cedula, objUsuarioAModificar.primernombre, objUsuarioAModificar.segundonombre, objUsuarioAModificar.primerapellido, objUsuarioAModificar.segundoapellido, objUsuarioAModificar.correo, objUsuarioAModificar.telefono);

      vm.modificarUsuario.cedula = objNuevoUsuario.cedula;
      vm.modificarUsuario.primernombre = objNuevoUsuario.primernombre;
      vm.modificarUsuario.segundonombre = objNuevoUsuario.segundonombre;
      vm.modificarUsuario.primerapellido = objNuevoUsuario.primerapellido;
      vm.modificarUsuario.segundoapellido = objNuevoUsuario.segundoapellido;
      vm.modificarUsuario.correo = objNuevoUsuario.correo;
      vm.modificarUsuario.telefono = objNuevoUsuario.telefono;
        
      vm.editarUsuario = (pUsuario) => {
          let listaUsuarios = servicioUsuarios.getUsuarios();

          listaUsuarios.forEach(objUsuario => {
              if(objUsuario.cedula == vm.modificarUsuario.cedula) {
                objUsuario.cedula = pUsuario.cedula;
                objUsuario.primernombre = pUsuario.primernombre;
                objUsuario.segundonombre = pUsuario.segundonombre;
                objUsuario.primerapellido = pUsuario.primerapellido;
                objUsuario.segundoapellido = pUsuario.segundoapellido;
                objUsuario.correo = pUsuario.correo;
                objUsuario.telefono = pUsuario.telefono;
                
                servicioUsuarios.actualizarUsuario(objUsuario);
              }
              
          });
          swal("Edición exitosa", "Usuario modificado con exito", "success", {
            button: "Aceptar",
        });
        $state.go('listarUsuario');
      }
    
    } 
})();