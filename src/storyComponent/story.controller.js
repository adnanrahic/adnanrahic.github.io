(function () {
	"use strict"
	
	angular
		.module('app')
		.controller('storyController', storyController);

	storyController.$inject = ['$routeParams','$sce','storyFactory'];
	function storyController($routeParams, $sce, storyFactory) {
		var vm = this;
		vm.id = $routeParams.id;
		vm.story = {};

		activate();

		function activate() {
			getStory(vm.id);
		}

		///////////////////

		function getStory(id) {
			return storyFactory.getStory(id).then(function (response) {
				vm.story = response;
				vm.story.body = $sce.trustAsHtml(vm.story.body);
			});
		}
		
	}
	
})();
