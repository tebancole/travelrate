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
        let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento,pNuevoUsuario.contrasenna)
  
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
      document.querySelectorAll("#txtDate")[0].setAttribute("max",maxDate);

      document.querySelectorAll("#txtDate")[0].setAttribute("min",minDate);
    }

    }
  })();