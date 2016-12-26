(function () {
	"use strict"
	
	angular
		.module('app')
		.factory('storyFactory', storyFactory);

	storyFactory.$inject = ['$q','appFactory'];
	function storyFactory($q, appFactory) {
		var factory = {
			getStory: getStory
		};
		return factory;

		///////////////

		function getStory(id) {
			var stories = appFactory.getStories();
			var q = $q.defer();
			for (var i = 1; i < stories.length; i++) {
				if (stories[i].id == id) {
					q.resolve(stories[i]);
					break;
				}
			}
			return q.promise;
		}
	}
	
})();
