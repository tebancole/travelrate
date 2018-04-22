(() => {
  'use strict';
  angular
  .module('travelrate')
  .service('servicioSesion', servicioSesion);

  function servicioSesion(){
    this.crear = (datos)=>{
      this.sesion = datos;
      sessionStorage.setItem('sesion', JSON.stringify(datos));
    }

    this.destruir = () =>{
      delete this.sesion;
      sessionStorage.removeItem('sesion');
    };
  }
})();