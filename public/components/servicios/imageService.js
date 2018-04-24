(()=>{
    'use strict';
    angular
    .module('travelrate')
    .service('imageService', imageService);
    
    imageService.$inject = ['$http'];
    
    function imageService($http){
  
      let cloudObj = {
        url:'https://api.cloudinary.com/v1_1/travelrate/image/upload',
        data:{
          upload_preset: 'travelrate',
          tags:'Any',
          context:'photo=test'
        }
      };
  
      let publicAPI = {
        getConfiguration: _getConfiguration
      }
      return publicAPI;
  
      function _getConfiguration(){
        return cloudObj;
      }
    }
  })();
  
  
  (() => {
    'use strict';
    angular
    .module('travelrate')
    .service('imageService', imageService);
  
    imageService.$inject = ['$http'];
  
    function imageService($http){
      const cloudObj = {
        url:'https://api.cloudinary.com/v1_1/travelrate/image/upload',
        data:{
          upload_preset: 'travelrate',
          tags:'Any',
          context:'photo=test'
        }
      };
  
      const uploadAPI = {
        getConfiguration : _getConfiguration
      };
      return uploadAPI;
  
      function _getConfiguration() {
        return cloudObj;
      }
    };
  })();