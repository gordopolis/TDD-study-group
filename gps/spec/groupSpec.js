describe("Group", function() {
	it("Create", function() {
		var group = Group.create();
		expect(group).toBeDefined();
		expect(group.Id).toEqual(undefined);
	});

	it("Find", function() {
		var group = Group.find(1);
		expect(group).toBeDefined();
		expect(group.id).toEqual(1);
	});
	
	it("Status", function() {
		var group = Group.create();
		var message = group.status();
		expect(message).toEqual("status of group 1");
	});

});
