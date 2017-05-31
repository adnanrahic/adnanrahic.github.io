(function () {
	"use strict"
	
	angular
		.module('app')
		.config(portfolioRoutes);

	portfolioRoutes.$inject = ['$routeProvider'];
	function portfolioRoutes($routeProvider) {
		$routeProvider.when("/portfolio", {
	        controller: "portfolioController",
	        controllerAs: "vm",
	        templateUrl: "portfolioComponent/portfolio.html",
	        preload: true
	    });
	}
	
})();
