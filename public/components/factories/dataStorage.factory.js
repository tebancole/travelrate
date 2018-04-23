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
      getSession: _getSession
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
         ('Datos que vienen desde la base de datos');
         (usuarios);
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
          primerNombre: data.primerNombre,
          segundoNombre: data.segundoNombre,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          correo: data.correo,
          telefono: data.telefono,
          fechaNacimiento: data.fechaNacimiento,
          contrasenna: data.contrasenna,
          rol: data.rol,
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
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'correo': data.correo,
          'telefono': data.telefono,
          'fechaNacimiento': data.fechaNacimiento,
          'contrasenna': data.contrasenna,
          'rol':data.rol,
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

    /**
     * Función que elimina los datos de la sesión activa
     */
    function _closeSession () {
      let response = true;
      sessionStorage.removeItem ('session');
      return response;
    }

    function _getSession () {
      let sessionActive = JSON.parse (sessionStorage.getItem ('session'));

      return sessionActive;
    }


    /**
     * Funcion que obtiene los datos de los usuarios del back end y los retorna
     */

    //
    //Inicio usuarios
    //

  }
  
}) ();
