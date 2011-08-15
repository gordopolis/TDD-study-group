describe("helper.js", function() {
	
	describe("echoFunction", function() {
		it("test output is equal to input", function() {
			var messageResult = echoFunction("hello world xxx");
			expect(messageResult.toString()).toEqual("Received: hello world xxx");
		});
	});
	
});
