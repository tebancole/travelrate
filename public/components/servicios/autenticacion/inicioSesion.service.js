(() => {
  'use strict';
  angular
  .module('travelrate')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log', '$http', 'servicioUsuarios', 'servicioSesion'];

  function servicioLogin($log, $http, servicioUsuarios, servicioSesion){

    let publicAPI = {
      inicioSesion : _inicioSesion,
      cerrarSesion: _cerrarSesion
    }
    return publicAPI
    
    function _inicioSesion(pCredenciales) {
      
      let listaUsuarios = servicioUsuarios.getUsuarios();
      console.log('users', servicioUsuarios.getUsuarios());
      let incioExitoso = false;

      

      for(let i = 0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].correo == pCredenciales.correo && listaUsuarios[i].contrasenna == pCredenciales.contrasenna){
          servicioSesion.crear(
            {
              nombre: listaUsuarios[i].primernombre,
              correo: listaUsuarios[i].correo,
              contrasenna: listaUsuarios[i].contrasenna,
              rol: listaUsuarios[i].rol
              
            }
            
          );
          
          incioExitoso = true;
        }
      }

      return incioExitoso;
    }

    console.log('prueba', listaUsuarios[i].rol);
    function _cerrarSesion(){
      servicioSesion.destruir();
      swal("Sesión cerrada", "Sesión cerrada correctamente", "success", {
        button: "Aceptar",
      });
    }
  }

})();