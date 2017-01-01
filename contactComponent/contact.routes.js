(function () {
	"use strict"
	
	angular
		.module('app')
		.config(contactRoutes);

	contactRoutes.$inject = ['$routeProvider'];
	function contactRoutes($routeProvider) {
		$routeProvider.when("/contact", {
	        controller: "contactController",
	        controllerAs: "vm",
	        templateUrl: "contactComponent/contact.html",
	        preload: true
	    });
	}
	
})();
