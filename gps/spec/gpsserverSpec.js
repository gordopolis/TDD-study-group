
describe("gpsserver.js", function() {

	describe("GpsServer", function() {
		it("Ping", function() {
			var gpsServer = new GpsServer();
			var message = gpsServer.ping();
			expect(message).toEqual("OK");
		});
		
		it("Group Status", function() {
			var gpsServer = new GpsServer();
			var message = gpsServer.groupStatus(1);
			expect(message).toEqual("status of group 1");
		});
		
		it("Update position", function() {
			var gpsServer = new GpsServer();
			var message = gpsServer.updatePosition("gps sentence");
			expect(message).toEqual("gps sentence");
		});
	});

});

