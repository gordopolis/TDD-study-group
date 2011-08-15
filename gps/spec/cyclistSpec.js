describe("Cyclist", function() {
	it("Update Position", function() {
		var cyclist = new Cyclist();
		var message = cyclist.updatePosition("gps sentence");
		expect(message).toEqual("gps sentence");
	});
	
	it("Cyclist must have id", function() {
		var cyclist = new Cyclist();
		expect(cyclist.id).toBeDefined();
	});
	
	it("Cyclist id must be unique", function() {
		var cyclist_1 = new Cyclist();
		var cyclist_2 = new Cyclist();
		expect(cyclist_2.id).not.toEqual(cyclist_1.id);
		expect(cyclist_2.id).toEqual(cyclist_1.id + 1);
	});
});
