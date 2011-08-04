describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world");
			expect(messageResult.toString()).toEqual("Received: hello world");
		});
	});
	
});

describe("RomanNumerals", function() {
	
	it("test negative", function() {
		var roman = new RomanNumeral();
		expect(roman.toRoman(-1)).toEqual(null);
		expect(roman.toRoman(-5)).toEqual(null);
		expect(roman.toRoman(-500)).toEqual(null);
	});
		
	it("test 0", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(0);
		expect(numeral).toEqual("N");
	});
	
	it("test 1", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(1);
		expect(numeral).toEqual("I");
	});
	
	it("test 2", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(2);
		expect(numeral).toEqual("II");
	});
	
	it("test 3", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(3);
		expect(numeral).toEqual("III");
	});
	
	it("test 4", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(4);
		expect(numeral).toEqual("IV");
	});
	
	it("test 5", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(5);
		expect(numeral).toEqual("V");
	});
	
	it("test 6", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(6);
		expect(numeral).toEqual("VI");
	});
	
	it("test 7", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(7);
		expect(numeral).toEqual("VII");
	});
	
	it("test 8", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(8);
		expect(numeral).toEqual("VIII");
	});
	
	it("test 9", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(9);
		expect(numeral).toEqual("IX");
	});
	
	it("test 10", function() {
		var roman = new RomanNumeral();
		var numeral = roman.toRoman(10);
		expect(numeral).toEqual("X");
	});
	
});