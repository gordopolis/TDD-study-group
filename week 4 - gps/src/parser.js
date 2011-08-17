function DecimalCoordinatesParser() {
	this.parse = function(sentence) {
		var coordinates = sentence.split(",");
		this.latitude = parseFloat(coordinates[0]);
		this.longitude = parseFloat(coordinates[1]);
	};

}

function NmeaParser() {
}