(() => {
    'use strict';
    angular
        .module('travelrate')
        .service('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http', 'dataStorageFactory'];

    function servicioUsuarios($log, $http, dataStorageFactory) {

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
            addUsuario: _addUsuario,
            getUsuarios: _getUsuarios,
            actualizarUsuario: _actualizarUsuario,
            getUsuarioActivo:_getUsuarioActivo,
            addEstado:_addEstado
            }
        return publicAPI
        
        function _addUsuario(pNuevoUsuario) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setUserData(pNuevoUsuario);
            // dataStorageFactory.sendMail(pNuevoUsuario);

            return registroExitoso;
        }

        function _getUsuarios() {
            let listaUsuarios = [];
            let listaUsuariosBD = dataStorageFactory.getUsersData();
            listaUsuariosBD.forEach(objUsuario => {
                console.log('objUsuario',objUsuario.listaPaquetes);
                    let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.correo, objUsuario.telefono, objUsuario.fechaNacimiento, objUsuario.contrasenna,)
                
                    
                    listaUsuarios.push(objUsuarioTemp);
                });

                console.log('Datos de la BD convertidos en clases');
                console.log('Lista de usuarios ', listaUsuarios);
            return listaUsuarios;
        };




        function _actualizarUsuario(pUsuario) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateUserData(pUsuario);
      
            return modificacionExitosa;
          }

        function _getRol() {
            let session = JSON.parse(sessionStorage.getItem('sesion'));
            let rol = session.tipo;
            return rol;
        }



        function _getUsuarioActivo(){
            let listaUsuarios= _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let usuarioActivo = '';
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(sesion.correo == listaUsuarios[i].correo){
                    usuarioActivo = listaUsuarios[i].primerNombre +' '+ listaUsuarios[i].segundoNombre +' ' + listaUsuarios[i].primerApellido+' '; 
                }   
                
            }
            return usuarioActivo;
        }
        
            
             function _addEstado(pEstado) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setEstadoData(pEstado);

            return registroExitoso;
        }

        };


    
        
})();