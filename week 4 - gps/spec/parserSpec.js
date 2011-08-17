describe("Decimal Coordinates Parser", function() {
	it("Parse", function() {
		var parser = new DecimalCoordinatesParser();
		parser.parse("10,20");
		expect(parser.latitude).toEqual(10);
		expect(parser.longitude).toEqual(20);
		
	});
});

describe("NMEA Parser", function() {
	it("Parse", function() {
		var parser = new NmeaParser();
		
	});
});