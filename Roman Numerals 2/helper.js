function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	
	this.append = function(start, append, count) {
		val = start;
		for (var i = 1; i <= count; i++) {
			val = val + append;
		}
		return val;
	};
	
	var ROMAN_DIGITS = {
			"X" : 10,
			"IX" : 9, 
			"V" : 5,
			"IV" : 4,
			"I" : 1
	};
	
	this.toRoman = function(value) {
		if (value < 0) {
			return null;
		} else if (value == 0) {
			return "N";
		}
		
		var romanString = "";
		for (digit in ROMAN_DIGITS) {
			while (value >= ROMAN_DIGITS[digit]) {
				romanString += digit;
				value -= ROMAN_DIGITS[digit];
			}
		}
		return romanString;
		
	};
	
}