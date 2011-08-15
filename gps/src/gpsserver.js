
function GpsServer() {

	this.ping = function() {
		return "OK";
	};
	
	this.login = function(cyclistName) {
	};
	
	this.groupStatus = function(groupId) {
		var group = Group.find(groupId);
		return group.status();
	};

	this.updatePosition = function(cyclistId, gpsSentence) {
		var cyclist = this.findCyclist(cyclistId);
		return cyclist.updatePosition(gpsSentence);
	};
	
	this.createGroup = function(cyclistId, groupName) {
	};
	
	this.findCyclist = function(cyclistId) {
		return new Cyclist();
	}

}


