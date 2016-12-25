(function () {
	"use strict"
	
	angular
		.module('app')
		.factory('homeFactory', homeFactory);

	homeFactory.$inject = ['$q'];
	function homeFactory($q) {
		var factory = {
			getStories: getStories
		};
		return factory;

		///////////////

		function getStories() {
			var stories = appFactory.getStories();
			var q = $q.defer();
			q.resolve(stories);
			return q.promise;
		}
	}
	
})();
