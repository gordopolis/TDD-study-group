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
		parser.parse('$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47');
		expect(parser.fields.length).toEqual(15);
	});
});