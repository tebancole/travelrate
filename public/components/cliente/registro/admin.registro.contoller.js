(() => {
  'use strict'
  angular
    .module('travelrate')
    .controller('controladorRegistrarClienteAdmin', controladorRegistrarClienteAdmins);

  controladorRegistrarClienteAdmins.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorRegistrarClienteAdmins($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.rol = servicioUsuarios.getRol();
    vm.confirmarContrasenna;

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
    vm.calcularEdad = (fechanacimiento) => { // fechanacimiento is a date
      let fechaDif = Date.now() - fechanacimiento.getTime();
      let edadFecha = new Date(fechaDif); // miliseconds from epoch
      return Math.abs(edadFecha.getUTCFullYear() - 1970);
    }


    vm.registrarUsuario = (pNuevoCliente) => {

      let edad = Number(vm.calcularEdad(pNuevoCliente.fechanacimiento));

      if (edad >= 18) {
        if (pNuevoCliente.contrasenna == vm.confirmarContrasenna) {
          {
            let objNuevoCliente = new Usuario(pNuevoCliente.cedula, pNuevoCliente.primernombre, pNuevoCliente.segundonombre, pNuevoCliente.primerapellido, pNuevoCliente.segundoapellido, pNuevoCliente.correo, pNuevoCliente.telefono, pNuevoCliente.fechanacimiento, pNuevoCliente.contrasenna, '1')

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

        }
        else {
          swal("Ocurrió un error", "Las contraseñas no coinciden.", "error", {
            button: "Aceptar",
          });
        }
      }
      else {
        swal("Ocurrió un error", "Usuario debe de ser mayor de edad.", "error", {
          button: "Aceptar",
        });
      }

    }

  }
})();