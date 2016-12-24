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
		var homeState = {
			name: 'home',
			url: '/home',
			templateUrl: 'home/home.html',
			controller: 'homeController',
			controllerAs: 'vm'
		}
  		$stateProvider.state(landingState);
  		$stateProvider.state(homeState);
	}
	
})();
