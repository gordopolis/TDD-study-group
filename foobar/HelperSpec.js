describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world");
			expect(messageResult.toString()).toEqual("Received: hello world");
		});
	});
	
});
