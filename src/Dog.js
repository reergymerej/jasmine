function Dog(){};

Dog.prototype.bark = function(){
	return 'bark!';
};

Dog.prototype.sit = function(){
	return true;
};

Dog.prototype.fetch = function(item){
	return item;
};