
function GpsServer() {
	var cyclists = new Array();
	var groups = new Array();
	
	this.ping = function() {
		return "OK";
	};
	
	this.login = function(cyclistName) {
		var cyclist = this.getCyclistByName(cyclistName);
		
		if (cyclist == undefined) {
			var cyclist = new Cyclist();
			cyclist.name = cyclistName;
			cyclists.push(cyclist);
		}
		return cyclist.id;
	};
	
	this.logout = function(cyclistId) {
		var cyclist = this.getCyclistById(cyclistId);
		if (cyclist) {
			cyclists.splice(cyclists.indexOf(cyclist), 1);
		}
		return;
	};

	this.getGroupByCyclistId = function(cyclistId) {
		var cyclist = this.getCyclistById(cyclistId);
			
		if (cyclist) {
			return cyclist.group;
		}
		return undefined;
	};

	this.getGroupByName = function(groupName) {
		for (index in groups) {
			if (groups[index].name == groupName) {
				return groups[index];
			}
		}
		return undefined;
	};
	
	this.getCyclistById = function(cyclistId) {
		for (index in cyclists) {
			if (cyclists[index].id == cyclistId) {
				return cyclists[index];
			}
		}
		return undefined;
	};

	this.getCyclistByName = function(cyclistName) {
		for (index in cyclists) {
			if (cyclists[index].name == cyclistName) {
				return cyclists[index];
			}
		}
		return undefined;
	};
	
	
	this.groupStatus = function(cyclistId) {
		var group = this.getGroupByCyclistId(cyclistId);
		var status = "";
		
		for (index in cyclists) {
			if (status != "") {
				status += "\n";
			}
			if (cyclists[index].group === group) {
				status += cyclists[index].id + ",";
				status += cyclists[index].position.latitude + ",";
				status += cyclists[index].position.longitude;
			}
		}
		return status;
	};

	this.updatePosition = function(cyclistId, gpsSentence) {
		var cyclist = this.getCyclistById(cyclistId);
		return cyclist.updatePosition(gpsSentence);
	};

	this.createGroup = function(cyclistId, groupName) {
		var cyclist = this.getCyclistById(cyclistId);
		var group = Group.create();
		group.name = groupName;
		groups.push(group);
		cyclist.group = group;
		return group.id;
	};
	
	this.joinGroup = function(cyclistId, groupName) {
		var cyclist = this.getCyclistById(cyclistId);
		var group = this.getGroupByName(groupName);
		cyclist.group = group;
		return group.id;
	};
}


