(() => {
    'use strict'
    angular
        .module('travelrate')
        .controller('controladorRegistrarHoteles', controladorRegistrarHoteles);

    controladorRegistrarHoteles.$inject = ['$http', '$state', '$location', 'servicioHoteles', 'imageService', 'Upload', 'NgMap', 'servicioUsuarios'];

    function controladorRegistrarHoteles($http, $state, $location, servicioHoteles, imageService, Upload, NgMap, servicioUsuarios) {
        let vm = this;

        vm.rol = servicioUsuarios.getRol();
        vm.nuevoHotel = {};

        let idRandom = getRandom();
        console.log(getRandom());

        // let latitud = document.getElementById("latitud").value;
        // console.log(latitud);

        // $scope.center = ([9.954578985381593, -84.06995176762638]);
        // $scope.latlng = [9.954578985381593, -84.06995176762638];

        // vm.getpos = function (event) {

        //     $scope.lat = event.latLng.lat();
        //     $scope.lng = event.latLng.lng();
        //     $scope.latlng = [event.latLng.lat(), event.latLng.lng()];

        // };


    //  vm.placeMarker = function () {
    //         console.log(this.getPlace());
    //         var loc = this.getPlace().geometry.location;
    //        $scope.latlng = [loc.lat(), loc.lng()];
    //        $scope.center = [loc.lat(), loc.lng()];


    //     };

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

          vm.preRegistrarHotel = (pNuevoHotel) => {
            vm.cloudObj.data.file = pNuevoHotel.foto[0];
            Upload.upload(vm.cloudObj).success((data) =>{
              vm.registrarHotel(pNuevoHotel, data.url);
           });
          }

          NgMap.getMap("mapreg").then((map) => {
        
            vm.map = map;
          });
     
        
            vm.getCurrentLocation = ($event) => {
              let position = [$event.latLng.lat(), $event.latLng.lng()];
              console.log('posicion actual', position);
              vm.current = position;
              
            }

            

            vm.registrarHotel = (pNuevoHotel, imgUrl) => {
              pNuevoHotel.id = idRandom;
              pNuevoHotel.foto = imgUrl;
              pNuevoHotel.latitud = vm.current[0];
              pNuevoHotel.longitud = vm.current[1]

            let objNuevoHotel = new Hotel (pNuevoHotel.id, pNuevoHotel.nombre, pNuevoHotel.latitud, pNuevoHotel.longitud, pNuevoHotel.provincia, pNuevoHotel.canton, pNuevoHotel.distrito, pNuevoHotel.direccionexacta, pNuevoHotel.telserviciocliente, pNuevoHotel.telreservaciones, pNuevoHotel.correoserviciocliente, pNuevoHotel.correoreservaciones, imgUrl);

       
    
            let registro = servicioHoteles.addHotel(pNuevoHotel);

                if (registro) {
                swal("Registro exitoso", "Hotel registrado con exito", "success", {

                button: "Aceptar",});
                $location.path('/listarHoteles');
                // vm.nuevoHotel = null;

            } else {
                swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
                button: "Aceptar",
                });
                
            }
            vm.nuevoHotel = null;
            };
        

            function getRandom() {
              let randomID = (
                document.getElementById('fieldid').value = Math.floor(Math.random() * 100000));
              let randomToString = randomID.toString();
                
              return randomToString;
              console.log('randomID', randomToString);
            }

    }
})();