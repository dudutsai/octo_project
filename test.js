const octoFunction = require('./octo_project.js');
const assert = require('assert');

describe('unexpected inputs', function() { 
	it('empty array', () => {
	  assert.deepEqual(octoFunction.countGreaterElementsToTheRight([]), []);
	});

	it('non array', () => {
	  assert.deepEqual(octoFunction.countGreaterElementsToTheRight(5), null);
	});

	it('null', () => {
	  assert.deepEqual(octoFunction.countGreaterElementsToTheRight(null), null);
	});

	it('js object', () => {
	  assert.deepEqual(octoFunction.countGreaterElementsToTheRight({'arrayInsideAnObject': [30,8,10,12,7]}), null);
	});	
});

describe('normal test cases', function() {
	it('given test case', () => {
		let nums = [30,8,10,12,7];
		assert.deepEqual(octoFunction.countGreaterElementsToTheRight(nums), [0,2,1,0,0]);
	})

	it('same numbers in array test case', () => {
		let nums = [8,8,8,8,8,8,8,8];
		assert.deepEqual(octoFunction.countGreaterElementsToTheRight(nums), [0,0,0,0,0,0,0,0]);
	})

	it('another test case', () => {
		let nums = [0,1,2,3,4,5];
		assert.deepEqual(octoFunction.countGreaterElementsToTheRight(nums), [5,4,3,2,1,0]);
	})
});