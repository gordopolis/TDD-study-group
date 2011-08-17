function DecimalCoordinatesParser() {
	this.parse = function(sentence) {
		var coordinates = sentence.split(",");
		this.latitude = parseFloat(coordinates[0]);
		this.longitude = parseFloat(coordinates[1]);
	};

}

function NmeaParser() {
	this.parse = function(sentence) {
		this.fields = sentence.split(",");
	};
	
	this.reportedCrc = function() {
		var crcField = this.fields[this.fields.length - 1];
		var hexCrc = crcField.substring(1); // strip off leading '*'
		return parseInt(hexCrc, 16);
	};
	
	this.reportedNmeaType = function() {
		return this.fields[0].substring(1); // strip off leading '$'
	};
}