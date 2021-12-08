

describe('homeCriteria', function() {
	it('is a function and it is defined', function() {
		expect(homeCriteria).toBeDefined();
		expect(typeof homeCriteria).toBe('function')
	});

	
	it('returns a string ', function() {
		expect(typeof homeCriteria()).toBe('string')
	});
		
});
	 