const countGreaterElementsToTheRight = (nums) => {
	if (!Array.isArray(nums)) {
		return null;
	}
	return nums.map((value, index, array) => {
		let numsGreaterToTheRight = 0;
		for (let i = index; i < array.length; i++) {
			if (array[i] > value) {
				numsGreaterToTheRight++;
			}
		}
		return numsGreaterToTheRight;
	});
}

module.exports = { countGreaterElementsToTheRight }