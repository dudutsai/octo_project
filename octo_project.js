function transmute(nums) {
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


console.log(transmute([30,8,10,12,7]));