(() => {
  'use strict'
  angular
    .module('travelrate')
    .controller('controladorEvaularHoteles', controladorEvaularHoteles);

  controladorEvaularHoteles.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService', 'servicioHoteles'];

  function controladorEvaularHoteles($http, $state, $stateParams, $location, servicioUsuarios, imageService, servicioHoteles) {
    let vm = this;

    //da error y no llena los data list cuando no hay un rol seleccionado
    // vm.rol = servicioUsuarios.getRol();
    vm.rol = servicioUsuarios.getRol();
    let objHotel = JSON.parse($stateParams.objHotelTemp);

    // let calculo = vm.calcularPromedio();
    // console.log ('caculo', calculo);

    vm.rate1;
    vm.rate2;
    vm.rate3;
    vm.rate4;
    vm.rate5;

    vm.onItemRatingCocina = function (ratingCocina) {
      console.log('rating1', ratingCocina);

      vm.rate1 = ratingCocina;

      return vm.rate1;
    };
    vm.onItemRatingCalidadServicio = function (ratingCalidadServicio) {

      vm.rate2 = ratingCalidadServicio;
      return vm.rate2;
    };

    vm.onItemRatingHabitaciones = function (ratingHabitaciones) {
      console.log('rating3', ratingHabitaciones);

      vm.rate3 = ratingHabitaciones;
      return vm.rate3;
    };

    vm.onItemRatingInfrastructura = function (ratingInfrastructura) {
      console.log('rating4', ratingInfrastructura);

      vm.rate4 = ratingInfrastructura;
      return vm.rate4;
    };

    vm.onItemRatingLimpieza = function (ratingLimpieza) {
      console.log('rating5', ratingLimpieza);

      vm.rate5 = ratingLimpieza;
      return vm.rate5;
    };


    vm.calcularPromedio = () => {

      let promedio = (vm.rate1 + vm.rate2 + vm.rate3 + vm.rate4 + vm.rate5) / 5;

      console.log('promedio', promedio);
      return promedio;

    };

    vm.agregarRate = () => {

      let promedio = (vm.rate1 + vm.rate2 + vm.rate3 + vm.rate4 + vm.rate5) / 5;
      
      let listaHoteles = servicioHoteles.getHotel();
      for (let i = 0; i < listaHoteles.length; i++) {
        if (listaHoteles[i].id == objHotel.id) {

          listaHoteles[i].agregarRating(promedio);

          servicioHoteles.actualizarHotel(listaHoteles[i]);
        }
      };
      $location.path('/listarHoteles');
    };








  }

})();

// $scope.calculateAge = function calculateAge(birthday) { // birthday is a date
//   var ageDifMs = Date.now() - birthday.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }