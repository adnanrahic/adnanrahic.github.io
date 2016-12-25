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
			for (var i = 1; i < stories.length; i++) {
				console.log("FOR: ", stories[i]);

				if (stories[i].id == id) {
					story = stories[i];
					
					console.log("IF [i]: ", stories[i]);
					console.log("IF {}: ", story);
					break;
				}
			}
			q.resolve(story);
			return q.promise;
		}
	}
	
})();
