
function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	this.toRoman = function(value) {
		if (value == 1) {
			return "I";
		} else if (value == 2) {
			return "II";
		} else if (value == 3) {
			return "III";
		}
	};
}