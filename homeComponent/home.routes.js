(function () {
	"use strict"
	
	angular
		.module('app')
		.config(homeRoutes);

	homeRoutes.$inject = ['$routeProvider'];
	function homeRoutes($routeProvider) {
		var landingRoute = {
			templateUrl: 'homeComponent/home.html',
			controller: 'homeController',
			controllerAs: 'vm'
		}
  		$routeProvider.when('/', landingRoute);
	}
	
})();
