(function () {
	"use strict"
	
	angular
		.module('app')
		.config(config);
	
	config.$inject = ['$compileProvider', '$locationProvider', '$routeProvider'];
	function config($compileProvider, $locationProvider, $urlRouterProvider) {
		$compileProvider.debugInfoEnabled(false);
    	$locationProvider.html5Mode(true).hashPrefix('!');
    	$routeProvider.otherwise({
	        redirectTo: "/"
	    });	
	}


})();
