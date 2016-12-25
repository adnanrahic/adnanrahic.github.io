(function () {
    'use strict';

    angular
        .module('app')
        .factory('responseObserver', responseObserver);
    
    responseObserver.$inject = ['$q', '$injector'];
    function responseObserver($q, $window, $location, $rootScope, $injector) {
        return {
            'responseError': function(errorResponse) {
                var $http = $injector.get('$http');    
                var $location = $injector.get('$location');    
                switch (errorResponse.status) {
                    case 404:
                        $location.path("/");
                        alert("The requested resource does not exist.");
                    }
                return $q.reject(errorResponse);
            }
        };
    }

}());