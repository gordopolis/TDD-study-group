describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world");
			expect(messageResult.toString()).toEqual("Received: hello world");
		});
	});
	
});

describe("RomanNumerals", function() {
	
	var roman = null;
	
	beforeEach(function() {
		if (roman == null) {
			roman = new RomanNumeral();
		}
	});
	
	it("test negative", function() {
		expect(roman.toRoman(-1)).toEqual(null);
		expect(roman.toRoman(-5)).toEqual(null);
		expect(roman.toRoman(-500)).toEqual(null);
	});
		
	it("test 0", function() {
		expect(roman.toRoman(0)).toEqual("N");
	});
	
	it("test 1", function() {
		expect(roman.toRoman(1)).toEqual("I");
	});
	
	it("test 2", function() {
		var numeral = roman.toRoman(2);
		expect(numeral).toEqual("II");
	});
	
	it("test 3", function() {
		expect(roman.toRoman(3)).toEqual("III");
	});
	
	it("test 4", function() {
		expect(roman.toRoman(4)).toEqual("IV");
	});
	
	it("test 5", function() {
		expect(roman.toRoman(5)).toEqual("V");
	});
	
	it("test 6", function() {
		expect(roman.toRoman(6)).toEqual("VI");
	});
	
	it("test 7", function() {
		expect(roman.toRoman(7)).toEqual("VII");
	});
	
	it("test 8", function() {
		expect(roman.toRoman(8)).toEqual("VIII");
	});
	
	it("test 9", function() {
		expect(roman.toRoman(9)).toEqual("IX");
	});
	
	it("test 10", function() {
		expect(roman.toRoman(10)).toEqual("X");
	});
	
	it("test 11", function() {
		expect(roman.toRoman(11)).toEqual("XI");
	});
	
	it("test 12", function() {
		expect(roman.toRoman(12)).toEqual("XII");
	});
	
	it("test 13", function() {
		expect(roman.toRoman(13)).toEqual("XIII");
	});
	
	it("test 14", function() {
		expect(roman.toRoman(14)).toEqual("XIV");
	});
	
	it("test 15", function() {
		expect(roman.toRoman(15)).toEqual("XV");
	});
	
	it("test 16", function() {
		expect(roman.toRoman(16)).toEqual("XVI");
	});
	
	it("test 17", function() {
		expect(roman.toRoman(17)).toEqual("XVII");
	});
	
	it("test 18", function() {
		expect(roman.toRoman(18)).toEqual("XVIII");
	});
	
	it("test 19", function() {
		expect(roman.toRoman(19)).toEqual("XIX");
	});
	
	it("test 20", function() {
		expect(roman.toRoman(20)).toEqual("XX");
	});
	
});