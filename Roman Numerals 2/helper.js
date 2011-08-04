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
	
	var chars  = new Array("I", "V", "X", "L");
	var values = new Array(1, 5, 10, 50);
	
	
	this.toRoman = function(value) {
		if (value < 0) {
			return null;
			
		} else if (value == 0) {
			return "N";
		}
		
		for (var i = 0; i < values.length; i++) {
			if (values[i] == value) {
				return chars[i];
			}
		}
			
		if (value < 4) {
			return this.append("", "I", value);
			
		} else if (value == 4) {
			return "IV";
			
		} else if (value < 9) {
			return this.append("V", "I", value - 5);
			
		} else if (value == 9) {
			return "IX";
			
		}
	};
	
}