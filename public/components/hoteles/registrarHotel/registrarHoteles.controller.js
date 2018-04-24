(() => {
    'use strict'
    angular
        .module('travelrate')
        .controller('controladorRegistrarHoteles', controladorRegistrarHoteles);

    controladorRegistrarHoteles.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioHoteles', 'imageService', 'Upload', 'NgMap', 'servicioUsuarios', '$scope'];

    function controladorRegistrarHoteles($http, $state, $stateParams, $location, servicioHoteles, imageService, Upload, NgMap, servicioUsuarios, $scope) {
        let vm = this;

        vm.rol = servicioUsuarios.getRol();
        vm.nuevoHotel = {};

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

          NgMap.getMap("map").then((map) => {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
            vm.map = map;
          });
     
        
            vm.getCurrentLocation = ($event) => {
              let postion = [$event.latLng.lat(), $event.latLng.lng()];
              console.log('poicion actual', postion);
              vm.current = postion;
            }

            vm.registrarHotel = (pNuevoHotel, imgUrl) => {
              pNuevoHotel.foto = imgUrl;
              pNuevoHotel.latitud = vm.current[0];
              pNuevoHotel.longitud = vm.current[1]

              // let lat = pNuevoHotel.latitud.toString();
              // let lng = pNuevoHotel.longitud.toString();

            // let latn = lat.toString();
            // let lngn = lng.toString();

            let objNuevoHotel = new Hotel (pNuevoHotel.nombre, pNuevoHotel.latitud, pNuevoHotel.longitud, pNuevoHotel.provincia, pNuevoHotel.canton, pNuevoHotel.distrito, pNuevoHotel.direccionExacta, pNuevoHotel.telServicioCliente, pNuevoHotel.telReservaciones, pNuevoHotel.correoReservaciones, imgUrl) 

       
    
            let registro = servicioHoteles.addHotel(pNuevoHotel);

                if (registro) {
                swal("Registro exitoso", "Hotel registrado con exito", "success", {

                button: "Aceptar",});

                vm.nuevoHotel = null;

            } else {
                swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
                button: "Aceptar",
                });
                
            }
            vm.nuevoHotel = null;
            };
        


        //   app.controller('MainCtrl', ['$scope', '$http', '$locale',
        //       function ($scope, $http, $locale) {

        //           $scope.center = [45.026950,15.205764];
        //           $scope.latlng = [45.026950, 15.205764];
        //           $scope.getpos = function (event) {
        //               $scope.lat = event.latLng.lat();
        //               $scope.lng = event.latLng.lng();
        //               $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
        //           };


        //           $scope.placeMarker = function(){
        //               console.log(this.getPlace());  
        //               var loc = this.getPlace().geometry.location;
        //               $scope.latlng = [loc.lat(), loc.lng()];
        //               $scope.center = [loc.lat(), loc.lng()];
        //           };

        //       }]);

    }
})();