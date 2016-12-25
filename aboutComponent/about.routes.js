(function () {
	"use strict"
	
	angular
		.module('app')
		.config(aboutRoutes);

	aboutRoutes.$inject = ['$routeProvider'];
	function aboutRoutes($routeProvider) {
		var aboutRoute = {
			templateUrl: 'aboutComponent/about.html',
			controller: 'aboutController',
			controllerAs: 'vm'
		}
  		$routeProvider.when('/about', aboutRoute);
	}
	
})();
