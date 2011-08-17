
describe("gpsserver.js", function() {

	describe("GpsServer", function() {
		it("Ping", function() {
			var gpsServer = new GpsServer();
			var message = gpsServer.ping();
			expect(message).toEqual("OK");
		});
		
	});

	describe("List of cyclists", function() {
		it("Get a cyclist by id", function() {
			var gpsServer = new GpsServer();
			var cyclistId = gpsServer.login("Marius");
			var cyclist = gpsServer.getCyclistById(cyclistId);
			expect(cyclist.id).toEqual(cyclistId);
			
		});
		
		it("Get a cyclist by name", function() {
			var gpsServer = new GpsServer();
			var cyclistId = gpsServer.login("Marius");
			var cyclist = gpsServer.getCyclistByName("Marius");
			expect(cyclist.id).toEqual(cyclistId);
		});
		
		it("Logout a cyclist", function() {
			var gpsServer = new GpsServer();

			var cyclistId = gpsServer.login("Marius");
			gpsServer.logout(cyclistId);
			var cyclist = gpsServer.getCyclistByName("Marius");
			expect(cyclist).not.toBeDefined();
		});
		
	});

	describe("List of Groups", function() {
		it("Get group by name", function() {
			var gpsServer = new GpsServer();
			var cyclistId = gpsServer.login("Marius");
			var groupId = gpsServer.createGroup(
				cyclistId, 
				"Marius's group");
			var group = gpsServer.getGroupByName("Marius's group");
			expect(group.id).toEqual(groupId);
		});

		it("Find group for cyclist", function() {
			var gpsServer = new GpsServer();
			var cyclistId = gpsServer.login("Marius");
			
			var groupId = gpsServer.createGroup(
				cyclistId, 
				"Marius's group");

			var group = gpsServer.getGroupByCyclistId(cyclistId);
			
			expect(group.id).toEqual(groupId);
		});
		
		it("Join group", function() {
			var gpsServer = new GpsServer();
			var cyclistId_1 = gpsServer.login("Marius");
			var cyclistId_2 = gpsServer.login("Peter");
			
			var groupId_1 = gpsServer.createGroup(
				cyclistId_1, 
				"Marius's group");
			var groupId_2 = gpsServer.joinGroup(
				cyclistId_2, 
				"Marius's group");

			expect(groupId_1).toEqual(groupId_2);
		});
		
	});
	
	
	describe("Application Flow", function() {
		var gpsServer = new GpsServer(),
			cyclistId_1 = undefined,
			cyclistId_2 = undefined;

		it("Login 1st cyclist", function() {
			cyclistId_1 = gpsServer.login("Marius");
		});

		it("Create a new group", function() {
			var groupId = gpsServer.createGroup(
				cyclistId_1, 
				"Marius's group");
		});

		it("Update 1st cyclist position", function() {
			var message = gpsServer.updatePosition(
					cyclistId_1, 
					"10,20");
			expect(message).toEqual("OK");
		});

		it("Get the group status", function() {
			var groupStatus = gpsServer.groupStatus(cyclistId_1);
			expect(groupStatus).toEqual(cyclistId_1 + ",10,20");
		});
		
		it("Login 2nd cyclist", function() {
			cyclistId_2 = gpsServer.login("Peter");
		});

		it("Join an existing group", function() {
			var groupId = gpsServer.joinGroup(
					cyclistId_2, 
					"Marius's group");
			var group = gpsServer.getGroupByCyclistId(cyclistId_1);
			expect(group.id).toEqual(groupId);
		});

		it("Update 2nd cyclist position", function() {
			var message = gpsServer.updatePosition(
				cyclistId_2, 
				"30,40");
			expect(message).toEqual("OK");
		});

		it("Get the group status", function() {
			var groupStatus = gpsServer.groupStatus(cyclistId_2);
			expect(groupStatus).toEqual(
				cyclistId_1 + ",10,20\n" + cyclistId_2 + ",30,40");
		});

		it("Logout 1st cyclist and check status", function() {
			gpsServer.logout(cyclistId_1);
			var groupStatus = gpsServer.groupStatus(cyclistId_2);
			expect(groupStatus).toEqual(
				cyclistId_2 + ",30,40");
		});
		
	});
	
	
});

