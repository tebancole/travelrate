(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorRegistrarClienteAdmin', controladorRegistrarClienteAdmins);
  
    controladorRegistrarClienteAdmins.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
    function controladorRegistrarClienteAdmins($state, $stateParams, $location, servicioUsuarios) {
        let vm = this;
        
      vm.rol = servicioUsuarios.getRol();  
      
  
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
            $location.path('/listarUsuario');
          }

  
        
        else {
          swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
            button: "Aceptar"
          });
        }
      }
  
      function calcularEdad () {
        let dtToday = new Date();
        let month = dtToday.getMonth() + 1;
        let day = dtToday.getDate();
        let year = dtToday.getFullYear();
        let maxYear = year - 18;
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();

        let maxDate = maxYear + '-' + month + '-' + day;
        let minYear = year - 80;
        let minDate = minYear + '-' + month + '-' + day;
        alert(maxDate);
        document.querySelectorAll("#fechaNacimiento")[0].setAttribute("max",maxDate);

        document.querySelectorAll("#fechaNacimiento")[0].setAttribute("min",minDate);
    }

    }
  })();