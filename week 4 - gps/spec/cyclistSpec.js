describe("Cyclist", function() {
	it("Update Position", function() {
		var cyclist = new Cyclist();
		var message = cyclist.updatePosition('10,20');
		expect(message).toEqual("OK");
		expect(cyclist.position.latitude).toEqual(10);
		expect(cyclist.position.longitude).toEqual(20);
	});
	
	it("Cyclist must have id", function() {
		var cyclist = new Cyclist();
		expect(cyclist.id).toBeDefined();
		expect(cyclist.name).toBeDefined();
	});
	
	it("Cyclist id must be unique", function() {
		var cyclist_1 = new Cyclist();
		var cyclist_2 = new Cyclist();
		expect(cyclist_1.id).not.toEqual(cyclist_2.id);
	});

	it("Cyclist id must sequential", function() {
		var cyclist_1 = new Cyclist();
		var cyclist_2 = new Cyclist();
		expect(cyclist_2.id).toEqual(cyclist_1.id + 1);
	});

});
