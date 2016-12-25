(function () {
	"use strict"
	
	angular
		.module('app')
		.factory('storyFactory', storyFactory);

	storyFactory.$inject = ['$q'];
	function storyFactory($q) {
		var factory = {
			getStory: getStory
		};
		return factory;

		///////////////

		function getStory(id) {
			var q = $q.defer();
			var story = {};
			for (var i = Stories.length - 1; i >= 0; i--) {
				if (Stories[i].id === id) {
					story = Stories[i];
					break;
				}
			}
			q.resolve(story);
			return q.promise;
		}
	}
	
})();
