function Group() {

	this.id = undefined;
	
	this.status = function() {
		return "status of group " + this.id;
	};
	
	this.getUniqueId = function() {
		return 1;
	};
}

Group.create = function() {
	var group = new Group();
	group.id = group.getUniqueId();
	return group;
};

Group.find = function(groupId) {
	var group = new Group();
	group.id = groupId;
	return group;
};
