(function () {
	"use strict"
	
	angular
		.module('app')
		.controller('portfolioController', portfolioController);

	//portfolioController.$inject = [];
	function portfolioController() {
		var vm = this;

		vm.home = "Yep.";
	}
	
})();
