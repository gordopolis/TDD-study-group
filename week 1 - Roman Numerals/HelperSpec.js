
describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world");
			expect(messageResult.toString()).toEqual("Received: hello world");
		});
	});
	
	describe("Roman Numerals", function() {
		it("test 1", function() {
			var roman = new RomanNumeral();
			expect(roman.toRoman(1)).toEqual("I");
		});
		
		it("test 2", function() {
			var roman = new RomanNumeral();
			expect(roman.toRoman(2)).toEqual("II");
		});
	});
		
});

