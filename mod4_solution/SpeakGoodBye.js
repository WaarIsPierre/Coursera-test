// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function () {
	  console.log(speakWord + " " + window.name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);