(function () {
	"use strict"
	
	angular
		.module('app')
		.config(storyRoutes);

	storyRoutes.$inject = ['$routeProvider'];
	function storyRoutes($routeProvider) {
		$routeProvider.when("/story/:id", {
	        controller: "storyController",
	        controllerAs: "vm",
	        templateUrl: "storyComponent/story.html"
	    });
	}
	
})();
