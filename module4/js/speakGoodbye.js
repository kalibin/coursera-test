(function (window){

	var byeSpeaker = {}; // We declare a variable as an object in a global scope

	var speakWord = "Good Bye";

	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name); // method accepts a value of the array element, and displays a message
	}

	window.byeSpeaker = byeSpeaker;
	
})(window);