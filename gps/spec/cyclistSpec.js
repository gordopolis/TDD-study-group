describe("Cyclist", function() {
	it("Update Position", function() {
		var cyclist = new Cyclist();
		var message = cyclist.updatePosition("gps sentence");
		expect(message).toEqual("gps sentence");
	});
});
