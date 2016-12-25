(function () {
	"use strict"
	
	angular
		.module('app')
		.config(homeRoutes);

	homeRoutes.$inject = ['$stateProvider'];
	function homeRoutes($stateProvider) {
		var landingState = {
			name: 'landing',
			url: '/',
			templateUrl: 'home/home.html',
			controller: 'homeController',
			controllerAs: 'vm'
		}
  		$stateProvider.state(landingState);
	}
	
})();
