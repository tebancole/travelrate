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

    vm.nuevoUsuario = {};
    vm.confirmarContrasenna;
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

    vm.registrarUsuario = (pNuevoUsuario) => {
      let edad = Number(vm.calcularEdad(pNuevoUsuario.fechanacimiento));

      if (edad >= 18) {
        if (pNuevoUsuario.contrasenna == vm.confirmarContrasenna) {
          {
            let objNuevoCliente = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.primernombre, pNuevoUsuario.segundonombre, pNuevoUsuario.primerapellido, pNuevoUsuario.segundoapellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechanacimiento, pNuevoUsuario.contrasenna, '1')

            let registro = servicioUsuarios.addUsuario(objNuevoCliente);

            if (registro) {
              let sesion = JSON.parse(sessionStorage.getItem('sesion'));

              swal("Registro exitoso", "Ya puede ingresar al sistema", "success", {
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