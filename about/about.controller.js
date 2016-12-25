(function () {
	"use strict"
	
	angular
		.module('app')
		.controller('aboutController', aboutController);

	//aboutController.$inject = [];
	function homeController() {
		var vm = this;

		vm.home = "Yep.";
	}
	
})();
