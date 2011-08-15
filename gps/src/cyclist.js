function Cyclist() {
	this.id = Cyclist.id++;
	
	this.position = new Position();
	
	this.updatePosition = function(gpsSentence) {
		return gpsSentence;
	};
}

Cyclist.id = 0;