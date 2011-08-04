describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world");
			expect(messageResult.toString()).toEqual("Received: hello world");
		});
	});
	
});

describe("RomanNumerals", function() {
	
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
	
});