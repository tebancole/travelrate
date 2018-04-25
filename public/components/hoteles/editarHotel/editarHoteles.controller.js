(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorEditarHoteles', controladorEditarHoteles);
  
    controladorEditarHoteles.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioHoteles', 'imageService', 'Upload', 'NgMap', 'servicioUsuarios', '$scope'];
  
    function controladorEditarHoteles($http, $state, $stateParams, $location, servicioHoteles, imageService, Upload, NgMap, servicioUsuarios, $scope) {
      let vm = this;

      vm.rol = servicioUsuarios.getRol();

      vm.modificarHotel = {};

      vm.objNuevoHotel = {};

      vm.provincias = $http({
        method: 'GET',
        url: './sources/data/provincias.json'
      }).then((success) => {
        vm.provincias = success.data;
      }, (error) => {
        console.log("Ocurrió un error " + error.data);
      });
  
      vm.rellenarCantones = (pidProvincia) => {
        vm.cantones = $http({
          method: 'GET',
          url: './sources/data/cantones.json'
        }).then((success) => {
          let cantones = [];
          for (let i = 0; i < success.data.length; i++) {
            if (pidProvincia == success.data[i].idProvincia) {
              cantones.push(success.data[i]);
            }
          }
          vm.cantones = cantones;
        }, (error) => {
          console.log("Ocurrió un error " + error.data)
        });
      }
  
      vm.rellenarDistrito = (pidCanton) => {
        console.log(pidCanton);
        vm.distritos = $http({
          method: 'GET',
          url: './sources/data/distritos.json'
        }).then((success) => {
          let distritos = [];
          for (let i = 0; i < success.data.length; i++) {
            if (pidCanton == success.data[i].idCanton) {
              distritos.push(success.data[i]);
            }
          }
          vm.distritos = distritos;
        }, (error) => {
          console.log("Ocurrió un error " + error.data)
        });
      }

      vm.cloudObj = imageService.getConfiguration();

          vm.preEditarHotel = (pNuevoHotel) => {
            vm.cloudObj.data.file = pNuevoHotel.foto[0];
            Upload.upload(vm.cloudObj).success((data) =>{
              vm.modificarHotel(pNuevoHotel, data.url);
           });
          }

          NgMap.getMap("mapedit").then((map) => {
            console.log(map.getCenter());
            vm.map = map;
          });
     

          vm.getCurrentLocation = ($event) => {
            let position = [$event.latLng.lat(), $event.latLng.lng()];
            console.log('posicion actual', position);
            vm.current = position;
          }
        


      let objHotelAModificar = JSON.parse($stateParams.objHotelTemp);
      // vm.objNuevoHotel.setId(objHotelAModificar._id);

      vm.objNuevoHotel = new Hotel(objHotelAModificar.nombre, objHotelAModificar.latitud, objHotelAModificar.longitud, objHotelAModificar.provincia, objHotelAModificar.canton, objHotelAModificar.distrito,objHotelAModificar.direccionexacta, objHotelAModificar.telserviciocliente, objHotelAModificar.telreservaciones, objHotelAModificar.correoserviciocliente, objHotelAModificar.correoreservaciones, objHotelAModificar.foto);

      vm.center = [objHotelAModificar.latitud, objHotelAModificar.longitud];

      // vm.modificarHotel.nombre = objNuevoHotel.nombre;
      // vm.modificarHotel.latitud = objNuevoHotel.latitud;
      // vm.modificarHotel.longitud = objNuevoHotel.longitud;
      // vm.modificarHotel.provincia = objNuevoHotel.provincia;
      // vm.modificarHotel.canton = objNuevoHotel.canton;
      // vm.modificarHotel.distrito = objNuevoHotel.distrito;
      // vm.modificarHotel.direccionExacta = objNuevoHotel.direccionexacta;
      // vm.modificarHotel.telServicioCliente = objNuevoHotel.telServicioCliente;
      // vm.modificarHotel.telReservaciones = objNuevoHotel.telReservaciones;
      // vm.modificarHotel.correoServicioCliente = objNuevoHotel.correoServicioCliente;
      // vm.modificarHotel.correoReservaciones = objNuevoHotel.correoReservaciones;
      // vm.modificarHotel.foto = objNuevoHotel.foto;

      vm.modificarHotel = (pHotel, imgUrl) => {
        let listaHoteles = servicioHoteles.getHotel();
        pHotel.foto = imgUrl;
        pHotel.latitud = vm.current[0];
        pHotel.longitud = vm.current[1];

        // if(vm.current[0] == null && vm.current[1] == null) {
        //   pHotel.latitud = objHotelAModificar.latitud;
        //   pHotel.longitud = objHotelAModificar.longitud;
        // }

        listaHoteles.forEach(objHotel => {
          if (objHotel._id == vm.objNuevoHotel._id) {
            objHotel.nombre = pHotel.nombre;
            objHotel.latitud = pHotel.latitud;
            objHotel.longitud = pHotel.longitud;
            objHotel.provincia = pHotel.provincia;
            objHotel.canton = pHotel.canton;
            objHotel.distrito = pHotel.distrito;
            objHotel.direccionExacta = pHotel.direccionExacta;
            objHotel.telServicioCliente = pHotel.telServicioCliente;
            objHotel.correoServicioCliente = pHotel.correoServicioCliente;
            objHotel.telReservaciones = pHotel.telReservaciones;
            objHotel.correoReservaciones = pHotel.correoReservaciones;
            objHotel.foto = pHotel.foto;

            servicioHoteles.actualizarHotel(objHotel);
        
          }
        });
        swal("Edición exitosa", "Hotel modificado con exito", "success", {
          button: "Aceptar",

              
      });
      $state.go('listarHoteles');
    }

}
})();d