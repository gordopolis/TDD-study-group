function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	
	this.toRoman = function(value) {
		if (value == 0) {
			return "N";
		} else if (value == 1) {
			return "I";
		} 
	};
	
}