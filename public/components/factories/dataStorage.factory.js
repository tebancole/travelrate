(() => {
  'use strict';
  angular.module ('travelrate').factory ('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory ($q, $log, $http) {
    const localAPI = {
      getUsersData: _getUsersData,
      setUserData: _setUserData,
      updateUserData: _updateUserData,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession,
      getHotelData: _getHotelData,
      setHotelData: _setHotelData,
      updateHotelData: _updateHotelData,
      sendMail: _sendMail
    };
    return localAPI;

    function _getUsersData () {
      let listaUsuarios = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (usuarios => {
      
        listaUsuarios = usuarios;
      });
      peticion.fail (() => {
        listaUsuarios = [];
         ('Ocurrió un error');
      });

      return listaUsuarios;
    }

    function _setUserData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          cedula: data.cedula,
          primernombre: data.primernombre,
          segundonombre: data.segundonombre,
          primerapellido: data.primerapellido,
          segundoapellido: data.segundoapellido,
          correo: data.correo,
          telefono: data.telefono,
          fechanacimiento: data.fechanacimiento,
          contrasenna: data.contrasenna,
          rol: data.rol,
          estado : data.estado,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
         ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
         ('Ocurrió un error');
      });

      return response;
    }

    function _updateUserData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primernombre': data.primernombre,
          'segundonombre': data.segundonombre,
          'primerapellido': data.primerapellido,
          'segundoapellido': data.segundoapellido,
          'correo': data.correo,
          'telefono': data.telefono,
          'fechanacimiento': data.fechanacimiento,
          'contrasenna': data.contrasenna,
          'rol':data.rol,
          'estado': data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
         ('Ocurrió un error');
      });

      return response;
    }

    function _setSession (value) {
      let response = true;
      sessionStorage.setItem ('session', JSON.stringify (value));
      return response;
    }
    // Sesion activa!
    
    function _closeSession () {
      let response = true;
      sessionStorage.removeItem ('session');
      return response;
    }

    function _getSession () {
      let sessionActive = JSON.parse (sessionStorage.getItem ('session'));

      return sessionActive;
    }


    function _getHotelData () {
      let listaHoteles = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_hoteles',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (hoteles => {
        listaHoteles = hoteles;
      });
      peticion.fail (() => {
        listaHoteles = [];
      });

      return listaHoteles;
    }

    function _setHotelData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_hotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id : data.id,
          nombre : data.nombre,
          latitud : data.latitud,
          longitud : data.longitud,
          provincia : data.provincia,
          canton : data.canton,
          distrito : data.distrito,
          direccionexacta : data.direccionexacta,
          telserviciocliente : data.telserviciocliente,
          telreservaciones : data.telreservaciones,
          correoserviciocliente : data.correoserviciocliente,
          correoreservaciones : data.correoreservaciones,
          foto : data.foto,
          rating : data.rating,
          ratingsuma : data.ratingsuma,
          estado : data.estado,
          
        },
      });

      peticion.done (datos => {
        response = datos.msj;
      });
      peticion.fail (error => {
        response = error;
      });

      return response;
    }

    function _updateHotelData (data) {
      let response;
      console.log(typeof(data.rating));
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/actualizar_hotel',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id : data.id,
          nombre : data.nombre,
          latitud : data.latitud,
          longitud : data.longitud,
          provincia : data.provincia,
          canton : data.canton,
          distrito : data.distrito,
          direccionexacta : data.direccionexacta,
          telserviciocliente : data.telserviciocliente,
          telreservaciones : data.telreservaciones,
          correoserviciocliente : data.correoserviciocliente,
          correoreservaciones : data.correoreservaciones,
          foto : data.foto,
          rating : JSON.stringify(data.rating),
          ratingsuma : data.ratingsuma,
          estado : data.estado,
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
      });
      peticion.fail (error => {
        response = error;
      });

      return response;
    }

    function _sendMail (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/mail',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          correo: data.correo,
          contrasenna: data.contrasenna,
        },
      });

      peticion.done (datos => {
        response = datos.success;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

  }
  
}) ();
