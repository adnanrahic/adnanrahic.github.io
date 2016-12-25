(function () {
	"use strict"
	
	angular
		.module('app')
		.config(config);
	
	config.$inject = ['$compileProvider', '$locationProvider', '$urlRouterProvider'];
	function config($compileProvider, $locationProvider, $urlRouterProvider) {
		$compileProvider.debugInfoEnabled(false);
    	$locationProvider.html5Mode(true).hashPrefix('!');

    	$urlRouterProvider.otherwise(function($injector) {
		    var $state = $injector.get('$state');
		    $state.go('/');
		});
	}


})();
