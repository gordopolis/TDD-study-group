describe("Group", function() {
	it("Group must have id", function() {
		var group = Group.create();
		expect(group.id).toBeDefined();
		expect(group.name).toBeDefined();
	});
	
	it("Group id must unique", function() {
		var group_1 = Group.create();
		var group_2 = Group.create();
		expect(group_2.id).not.toEqual(group_1.id);
	});

	it("Group id must sequential", function() {
		var group_1 = Group.create();
		var group_2 = Group.create();
		expect(group_2.id).toEqual(group_1.id + 1);
	});

});
