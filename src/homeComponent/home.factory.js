(function () {
	"use strict"
	
	angular
		.module('app')
		.factory('homeFactory', homeFactory);

	homeFactory.$inject = ['$q','appFactory'];
	function homeFactory($q, appFactory) {
		var factory = {
			getStories: getStories
		};
		return factory;

		///////////////

		function getStories() {
			return $q(function (resolve, reject) {
				var stories = appFactory.getStories().sort(function (a, b) { return b.id - a.id; });
				console.log(stories);
				resolve(stories);
			});
		}
	}
	
})();
