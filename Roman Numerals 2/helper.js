function echoFunction(message) {
	return "Received: " + message;
}

function RomanNumeral() {
	
	letters = new Array();
	letters[1] = "I";
	letters[5] = "V";
	letters[10] = "X";
	letters[50] = "L";
	
	base = "I";
	
	this.toRoman = function(value) {
		if (value < 0) {
			return null;
			
		} else if (value == 0) {
			return "N";
			
		} else if (value < 4) {
			val = "";
			for (var i = 1; i <= value; i++) {
				val = val + base;
			}
			return val;
			
		} else if (value == 4) {
			return "IV";
			
		} else if (value == 5) {
			return "V";
			
		} else if (value < 9) {
			val = "V";
			for (var i = 6; i <= value; i++) {
				val = val + base;
			}
			return val;	
			
		} else if (value == 9) {
			return "IX";
			
		} else if (value == 10) {
			return "X";
			
		}
	};
	
}