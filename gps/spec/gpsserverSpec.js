
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
		
	});
	
	describe("Application Flow", function() {
		var gpsServer = new GpsServer();
		var cyclistId;
		
		it("Login", function() {
			var cyclistId = gpsServer.login("Marius");
		});
		
		it("Create a new group", function() {
			var groupId = gpsServer.createGroup(cyclistId, "Marius's group");
		});
		
		it("Update my position", function() {
			var message = gpsServer.updatePosition(cyclistId, "gps sentence");
			expect(message).toEqual("gps sentence");
		});
		
		it("Start ride", function() {
		});
		
		it("Group status", function() {
//			var data = gpsServer.groupStatus(groupId);
		});
		
		it("End ride", function() {
		});
	});

});

