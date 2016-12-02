(function (window) {

	// Define array Names[]
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	console.log(names);

	// Loop start
	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase(); // using the method "charAt()" we get the first letter of each element of the array, and by the method "toLowerCase()" convert it to lower case

		if (firstLetter == "j") {
			byeSpeaker.speak(names[i]); // if the first letter of the element of the array is equal to "j", then we use the method "byeSpeaker.speak()"
		}
		else {
			helloSpeaker.speak(names[i]); // otherwise we call the method "helloSpeaker.speak()"
		}
	} // Loop end

	window.names = names;
})(window);