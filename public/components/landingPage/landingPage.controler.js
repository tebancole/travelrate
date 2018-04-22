(() => {
  'use strict';
  angular
    .module('travelrate')
    .controller('controladorLanding', controladorLanding);

  controladorLanding.$inject = ['$state', '$location'];

  function controladorLanding($state, $location) {
    let vm = this;


    $(document).ready(function () {
      var imagecollection = [
        { src: '../../sources/images/slide1.jpg'},
        { src: '../../sources/images/slide2.jpg'},
        { src: '../../sources/images/slide3.jpg'},
        { src: '../../sources/images/slide4.jpg'}
        /* Slideshow not working? Check your image links. */
      ];

      $("#bodybg").vegas({
        slides: imagecollection,
        transition: 'zoomOut',
        preloadImage: true,
        timer: false,
        shuffle: true,
        animation: 'kenburns',
        cover: true
      });
    });


    /* Back top
   -----------------------------------------------*/
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });

    /* wow
    -------------------------------*/
    new WOW({ mobile: false }).init();

  }
})();