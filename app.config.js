(function () {
	"use strict"
	
	angular
		.module('app')
		.config(config);
	
	config.$inject = ['$compileProvider', '$locationProvider'];
	function config($compileProvider, $locationProvider) {
		$compileProvider.debugInfoEnabled(false);
    	$locationProvider.html5Mode(true);
	}


})();
