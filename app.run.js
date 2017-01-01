(function () {
    "use strict"
    
    angular
        .module('app')
        .run(run);

    run.$inject = ['$route', '$templateCache', '$http'];
    function run($route, $templateCache, $http) {
        var url;
        for (var i in $route.routes) {
            if ($route.routes[i].preload) {
                if (url = $route.routes[i].templateUrl) {
                    console.log(url);
                    $http.get(url, { cache: $templateCache });
                }
            }
        }
    }

})();
