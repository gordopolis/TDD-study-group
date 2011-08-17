
function Cyclist() {
	this.constructor.id++;
	this.id = this.constructor.id;
	
	this.position = new Position();
	
	this.name = "unknown";
	
	this.updatePosition = function(gpsSentence) {
		var parser = new DecimalCoordinatesParser();
		parser.parse(gpsSentence);
		this.position.latitude = parser.latitude;
		this.position.longitude = parser.longitude;
		return "OK";
	};
}

Cyclist.id = 0;