
function GpsServer() {

	this.ping = function() {
		return "OK";
	};
	
	this.groupStatus = function(groupId) {
		var group = Group.find(groupId);
		return group.status();
	};

	this.updatePosition = function(gpsSentence) {
		var cyclist = new Cyclist();
		return cyclist.updatePosition(gpsSentence);
	};

}


