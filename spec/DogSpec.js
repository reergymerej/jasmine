describe('Dog', function(){
	var dog;

	beforeEach(function(){
		dog = new Dog();
	});

	it('can bark on command', function(){
		expect(dog.bark()).toContain('bark');
	});

	it('can sit', function(){
		expect(dog.sit()).toBeTruthy();
	});

	it('can fetch an object', function(){
		expect(dog.fetch('ball')).toBe('ball');
		expect(dog.fetch('gooble')).toBe('gooble');
		expect(dog.fetch()).toBeNull();
	});
});