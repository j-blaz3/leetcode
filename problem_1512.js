/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
		let numPairs = 0;
		for (let i = 0; i < nums.length; i++) {
			for (let j = 0; j < nums.length; j++) {
				if (nums[i] == nums[j] && i < j) {
					numPairs += 1;
				}
			}
		}
		return numPairs;
};

nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));
