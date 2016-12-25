(function () {
	"use strict"
	
	angular
		.module('app')
		.factory('appFactory', appFactory);

	appFactory.$inject = ['$q'];
	function appFactory($q) {
		var factory = {
			getStories: getStories
		};
		return factory;

		///////////////

		const Stories = [
			{
				id: 1,
				title: "Can you learn to code in 4 weeks?",
				subtitle: "Well, no. Isn’t it obvious?",
				createdAt: "Dec 3 2016, 3 min read.",
				body: `
					The whole concept of becoming a developer is a journey. Not a single one of us who are currently working as software engineers have had a moment of clarity where we said to ourselves…

					\"Yep, I’m a developer now.\"

					<hr>

					You might be asking yourself well what about all the abundance of courses out there. They all say the same. Learn to code in 4 weeks or less. It’s bluntly put impossible. Not because I undermine the intellectual capabilities of the average Joe, but simply because we humans have a limited capacity to process huge amounts of data. This is precisely what programming is. Every day is a challenge to solve problems, mysteries and illusions which are riddles to the average person. So how does one do this? By processing data. You have to dissect the problem using the vast data you have accumulated since the very beginning, when you started learning how to code.

					Do you understand now? Coding is experience. Knowledge of what has been, and things you have seen. All working in unison, towards a common goal. To solve that problem you are in such a need to solve. Just as a blacksmith needs to condition himself every day, by hammering away on a piece of armor, until reaching perfection. Programmers do the same, with our brains. Hammering away on this algorithm and that function to find an ingenious way of solving a “mystery”.

					Don’t take this the wrong way. I’m only trying to encourage you. Don’t give up in your quest of becoming a developer. Because it is hard, very hard. I still remember all the long sleepless nights of banging my head against various programming assignments. You will too. But it will only make you stronger.

					Above I mentioned the limited capacity we humans have with large amounts of data. Let me elaborate this in a simpler way. Our short term memory is horrible. Only an incredibly small fraction of it actually sticks in our heads and gets stored in our long term memory. This is why we need conditioning. Regular exercise, ideally on a daily basis, pushes our brains to the maximum and forces it to create the neural connections which will make us remember more of what is actually needed. Not just funny memes of cats. Jokes aside. We humans are biologically poorly programmed. Conditioning fights this innate flaw.

					Returning to the illusion of being able to learn to code in 4 weeks, there is one thing I can confirm. You can more than surely learn how to, in time, become a programmer. How to gain the instinct and learn what you need to do in order to reach your goals. In absolute certainty will you learn the core programming skills which will keep you afloat on your journey to the promised city developers strive to reach. These skills, logical, problem solving and a bit of magic voodoo witchcraft (again with the lame jokes), are what you will in time condition to perfection. You are now the blacksmith. These skills, your tools. Use them to create. Inspire and strive.

					\"The computer programmer is a creator of universes for which he alone is responsible. Universes of virtually unlimited complexity can be created in the form of computer programs.\"
					— Joseph Weizenbaum, Computer Power and Human Reason

					Where to start? From the very beginning. The worst thing one can do is to rush the process of gaining knowledge. Nowhere is this more crucial than in programming. For without roots, a tree is nothing.

				`
			}
		];

		function getStories() {
			return Stories;
		}
	}
	
})();
