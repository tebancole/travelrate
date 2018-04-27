(() => {
    'use strict'
    angular
      .module('travelrate')
      .controller('controladorListarHoteles', controladorListarHoteles);
  
    controladorListarHoteles.$inject = ['$state', '$stateParams', '$location', 'servicioHoteles', 'servicioUsuarios'];
  
    function controladorListarHoteles($state, $stateParams, $location, servicioHoteles,servicioUsuarios) {
      let vm = this;

      vm.rol = servicioUsuarios.getRol();
      vm.listaHoteles = servicioHoteles.getHotel();

      console.log('hoteles',vm.listaHoteles);

      vm.modificarHotel = (pObjHotel) =>{
        $state.go('editarHoteles', { objHotelTemp: JSON.stringify(pObjHotel) });

      };

      vm.evaluarHotel = (pObjHotel) =>{
        $state.go('evaularHotel', { objHotelTemp: JSON.stringify(pObjHotel) });


      };

      vm.calcularPromedio = (rating) => {
        return rating.reduce((sum, x) => sum + x) / rating.length;
      }

      $('.remove').click(function(){
        $('.bottom').removeClass("clicked");
      });
}
})();