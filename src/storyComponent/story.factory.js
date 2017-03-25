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
			var story = {};
			for (var i = 0; i < stories.length; i++) {
				if (stories[i].id == id) {
					story = stories[i];
					break;
				}
			}
			q.resolve(story);
			return q.promise;
		}
	}
	
})();
