(function () {
	"use strict"
	
	angular
		.module('app')
		.controller('homeController', homeController);

	homeController.$inject = ['homeFactory'];
	function homeController() {
		var vm = this;
		vm.stories = [];

		activate();

		function activate() {
			getStories();
		}

		///////////////////

		function getStories() {
			return homeFactory.getStories().then(function (response) {
				vm.stories = response;
				console.log(vm.stories);
				// return vm.stories;
			});
		}

		
	}
	
})();
