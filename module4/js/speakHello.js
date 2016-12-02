(function (window) {

	var helloSpeaker = {}; // We declare a variable as an object in a global scope

	var speakWord = "Hello";

	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name); // method accepts a value of the array element, and displays a message
	}

	window.helloSpeaker = helloSpeaker;
})(window);