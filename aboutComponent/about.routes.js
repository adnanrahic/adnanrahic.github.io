(function () {
	"use strict"
	
	angular
		.module('app')
		.config(aboutRoutes);

	aboutRoutes.$inject = ['$stateProvider'];
	function aboutRoutes($stateProvider) {
		var aboutState = {
			name: 'about',
			url: '/about',
			templateUrl: 'aboutComponent/about.html',
			controller: 'aboutController',
			controllerAs: 'vm'
		}
  		$stateProvider.state(aboutState);
	}
	
})();
