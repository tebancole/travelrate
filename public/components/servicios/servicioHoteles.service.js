(() => {
    'use strict';
    angular
        .module('travelrate')
        .service('servicioHoteles', servicioHoteles)

    servicioHoteles.$inject = ['$log', '$http', 'dataStorageFactory'];

    function servicioHoteles($log, $http, dataStorageFactory) {

        const asyncLocalStorage = {
            setItem: function (key, value) {
                return Promise.resolve().then(() => {
                    let response = true;
                    localStorage.setItem(key, JSON.stringify(value));
                    return response
                });
            }
        };

        let publicAPI = {
            addHotel: _addHotel,
            getHotel: _getHotel,
            actualizarHotel: _actualizarHotel,
            }
        return publicAPI
        
        function _addHotel(pNuevoHotel) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setHotelData(pNuevoHotel);

            return registroExitoso;
        }

        function _getHotel() {

            let listaHoteles = [];
            let listaHotelesBD = dataStorageFactory.getHotelData();
            listaHotelesBD.forEach(objHotel => {
     
                    let objHotelTemp = new Hotel(objHotel.id,objHotel.nombre, objHotel.latitud, objHotel.longitud, objHotel.provincia, objHotel.canton, objHotel.distrito, objHotel.direccionexacta, objHotel.telserviciocliente, objHotel.telreservaciones, objHotel.correoreservaciones, objHotel.correoreservaciones,objHotel.foto,objHotel.estado, objHotel.rating);

                    objHotelTemp.ratingsuma = Number(objHotel.ratingsuma);
                

                    listaHoteles.push(objHotelTemp);
                });


            return listaHoteles;
        };

        function _actualizarHotel(pHotel) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateHotelData(pHotel);
      
            return modificacionExitosa;
          }


        };

})();