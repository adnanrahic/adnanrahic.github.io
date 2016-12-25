(function () {
	"use strict"
	
	angular
		.module('app')
		.controller('storyController', storyController);

	storyController.$inject = ['$routeParams','storyFactory'];
	function storyController($routeParams, storyFactory) {
		var vm = this;
		var id = $routeParams.id;
		vm.story = {};

		activate();

		function activate() {
			getStory(id);
		}

		///////////////////

		function getStory(id) {
			return storyFactory.getStory(id).then(function (response) {
				vm.story = response;
				console.log(vm.story);
			});
		}
		
	}
	
})();
