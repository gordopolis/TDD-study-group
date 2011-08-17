function Group() {

	this.status = function() {
		return "status of group " + this.id;
	};
	
	this.getUniqueId = function() {
		return 1;
	};
}

Group.id = 0;

Group.create = function() {
	var group = new Group();
	Group.id++;
	group.id = Group.id;
	group.name = "unknown";
	return group;
};

