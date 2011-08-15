describe("NMEA Parser", function() {
	it("Parse NMEA", function() {
		var position = NmeaParser.parse("nmea sentence");
		expect(position).toBeDefined();
	});
});
