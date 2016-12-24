(function () {
	"use strict"
	
	angular
		.module('app')
		.config(homeRoutes);

	homeRoutes.$inject = ['$stateProvider'];
	function homeRoutes($stateProvider) {
		var homeState = {
		    name: 'home',
		    url: '/home',
		    templateUrl: 'home.html'
		  }
  		$stateProvider.state(homeState);
	}
	
})();
