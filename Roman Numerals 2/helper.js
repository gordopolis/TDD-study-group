function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	
	letters = new Array();
	letters[1] = "I";
	letters[5] = "V";
	letters[10] = "X";
	letters[50] = "L";
	
	this.append = function(start, append, count) {
		val = start;
		for (var i = 1; i <= count; i++) {
			val = val + append;
		}
		return val;
	};
	
	this.toRoman = function(value) {
		if (value < 0) {
			return null;
			
		} else if (value == 0) {
			return "N";
			
		} else if (value < 4) {
			return this.append("", "I", value);
			
		} else if (value == 4) {
			return "IV";
			
		} else if (value == 5) {
			return "V";
			
		} else if (value < 9) {
			return this.append("V", "I", value - 5);
			
		} else if (value == 9) {
			return "IX";
			
		} else if (value == 10) {
			return "X";
			
		}
	};
	
}