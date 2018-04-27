(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Travel Rate'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landingPage/landingPage.controler.js')
          }]
        },
        controller: 'controladorLanding',
        controllerAs: 'vm'
      })
      

      .state('logIn', {
        url: '/logIn',
        templateUrl: './components/inicioSesion/inicioSesion.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controller.js')
          }]
        },
        controller: 'controladorLogin',
        controllerAs: 'vm'
      })

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'controladorMain',
        controllerAs: 'vm'
      })

      $stateProvider
      .state('main.dashboard', {
        url: '/dashboard',
        templateUrl: './components/main/dashboard/mainDashboard.view.html',
        data:{
          pageTitle: 'Dashboard'
        }
      })
      
      
      .state('registrarCliente', {
        url: '/registrarCliente',
        templateUrl: './components/cliente/registro/cliente.registro.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/cliente/registro/cliente.registro.controller.js')
          }]
        },
        controller: 'controladorRegistrarClientes',
        controllerAs: 'vm'
      })

      .state('registrarHotel', {
        url: '/registrarHotel',
        templateUrl: './components/hoteles/registrarHotel/registrarHoteles.view.html',
        data:{
          pageTitle: 'Registro de Hoteles'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/registrarHotel/registrarHoteles.controller.js')
          }]
        },
        controller: 'controladorRegistrarHoteles',
        controllerAs: 'vm'
      })

      .state('listarHoteles', {
        url: '/listarHoteles',
        templateUrl: './components/hoteles/listarHotel/listarHoteles.view.html',
        data:{
          pageTitle: 'Lista de Hoteles'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/listarHotel/listarHoteles.controller.js')
          }]
        },
        controller: 'controladorListarHoteles',
        controllerAs: 'vm'
      })

      
      .state('editarHoteles', {
        url: '/editarHoteles',
        templateUrl: './components/hoteles/editarHotel/editarHoteles.view.html',
        data:{
          pageTitle: 'Editar Hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/editarHotel/editarHoteles.controller.js')
          }]
        },
        controller: 'controladorEditarHoteles',
        controllerAs: 'vm'
      })

      .state('evaularHotel', {
        url: '/evaularHotel',
        templateUrl: './components/hoteles/evaularHotel/evaluarHotel.view.html',
        data:{
          pageTitle: 'Evaular Hotel'
        },
        params: {
          objHotelTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/evaularHotel/evaularHotel.controller.js')
          }]
        },
        controller: 'controladorEvaularHoteles',
        controllerAs: 'vm'
      })
      
      .state('modificarUsuario', {
        url: '/modificarUsuario',
        templateUrl: './components/cliente/modificar/clientemodificar.view.html',
        data:{
          pageTitle: 'Modificar Usuario'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/cliente/modificar/clientemodificar.controller.js')
          }]
        },
        controller: 'controladorModificarUsuario',
        controllerAs: 'vm'
      })
      
      .state('listarUsuario', {
        url: '/listarUsuario',
        templateUrl: './components/cliente/listar/clientelistar.view.html',
        data:{
          pageTitle: 'Lista de Usuarios'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/cliente/listar/clientelistar.controller.js')
          }]
        },
        controller: 'controladorListarUsuario',
        controllerAs: 'vm'
      })

      .state('registrarClienteAdmin', {
        url: '/registrarClienteAdmin',
        templateUrl: './components/cliente/registro/admin.registro.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/cliente/registro/admin.registro.contoller.js')
          }]
        },
        controller: 'controladorRegistrarClienteAdmin',
        controllerAs: 'vm'
      })

      .state('sobreCompania', {
        url: '/sobreCompania',
        templateUrl: './components/cliente/compania/sobreCompañia.view.html',
        data:{
          pageTitle: 'Registro cliente'
        },
        params: {
          objClienteTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/cliente/compania/sobreCompania.controller.js')
          }]
        },
        controller: 'controladorSobreCompania',
        controllerAs: 'vm'
      })




    $urlRouterProvider.otherwise('/');
  };

  

})();
