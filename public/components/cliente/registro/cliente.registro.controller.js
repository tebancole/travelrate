(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorRegistrarClientes', controladorRegistrarClientes);
  
    controladorRegistrarClientes.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
    function controladorRegistrarClientes($state, $stateParams, $location, servicioUsuarios) {
      let vm = this;
  
      //da error y no llena los data list cuando no hay un rol seleccionado
      // vm.rol = servicioUsuarios.getRol();

      vm.nuevoCliente = {};
    
    /*
      var map;
      function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
      }
    */
  
   
      vm.registrarUsuario = (pNuevoUsuario) => {
        let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primernombre, pNuevoUsuario.segundonombre, pNuevoUsuario.primerapellido, pNuevoUsuario.segundoapellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechanacimiento,pNuevoUsuario.contrasenna, '1')
        
        
  
        let registro = servicioUsuarios.addUsuario(objNuevoCliente);
  
        if (registro) {
          let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      
            swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
              button: "Aceptar",
            });
            $location.path('/logIn');
          }

  
        
        else {
          swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
            button: "Aceptar"
          });
        }
      }
  

    

    }
  })();