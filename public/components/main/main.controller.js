(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$state','$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();
    console.log('prueba', servicioUsuarios.getRol());

    vm.cerrarSesion = ()=>{
      servicioLogin.cerrarSesion();

    }    
    vm.usuarioActivo = servicioUsuarios.getUsuarioActivo();

    $(document).ready(function () {
      var imagecollection = [
        { src: '../../sources/images/img1.jpg'},
        { src: '../../sources/images/img2.jpg'},
        { src: '../../sources/images/img3.jpg'},
        { src: '../../sources/images/img4.jpg'},
        { src: '../../sources/images/img5.jpg'},
        { src: '../../sources/images/slide3.jpg'},
        { src: '../../sources/images/slide4.jpg'}
        /* Slideshow not working? Check your image links. */
      ];

      $("#bg").vegas({
        slides: imagecollection,
        transition: [ 'fade', 'zoomOut', 'swirlLeft' ],
        preloadImage: true,
        timer: false,
        shuffle: true,
        animation: 'kenburns',
        cover: true
      });
    });
    

    let map;

    vm.initMap = ()=>{
      if (navigator.geolocation) {
        try {
          navigator.geolocation.getCurrentPosition(function(position) {
            let myLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setPos(myLocation);
          });
        } catch (err) {
          let myLocation = {
            lat: 9.9981413,
            lng: -84.1197643
          };
          setPos(myLocation);
        }
      } else {
        let myLocation = {
          lat: 9.9981413,
          lng: -84.1197643
        };
        setPos(myLocation);
        console.log('setPos(myLocation)', setPos(myLocation));
      }
    }

    function setPos(myLocation) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: myLocation,
        zoom: 10
      });

      let service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: myLocation,
        radius: 2000,
        types: ['hotels']
      }, processResults);

    }

    function processResults(results, status, pagination) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      } else {
        createMarkers(results);

      }
    }

    function createMarkers(places) {
      let bounds = new google.maps.LatLngBounds();
      let placesList = document.getElementById('places');

      for (let i = 0, place; place = places[i]; i++) {
        let image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        let marker = new google.maps.Marker({
          map: map,
          icon: image,
          title: place.name,
          animation: google.maps.Animation.DROP,
          position: place.geometry.location
        });

        bounds.extend(place.geometry.location);
      }
      map.fitBounds(bounds);
    }
    
  }
})();