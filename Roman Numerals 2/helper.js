function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	
	this.toRoman = function(value) {
		if (value == 0) {
			return "N";
		} else if (value == 1) {
			return "I";
		} else if (value == 2) {
			return "II";
		} else if (value == 3) {
			return "III";
		} else if (value == 4) {
			return "IV";
		} else if (value == 5) {
			return "V";
		} else if (value == 6) {
			return "VI";
		} else if (value == 7) {
			return "VII";
		} else if (value == 8) {
			return "VIII";
		} else if (value == 9) {
			return "VIIII";
		} else if (value == 10) {
			return "X";
		}
	};
	
}