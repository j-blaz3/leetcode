/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
	var count = 0;
	if (arr.length < 2) {
			return arr[0];
	}
	for (var i = 0; i < arr.length; i++) {
			var x = arr[i];
			if (x === arr[i + 1]) {
					var y = x;
					count += 1;
					if (count / arr.length > .25) {
							return y;
					}
			} else {
					count = 1;
			}
	}
};

arr = [1,2,2,6,6,6,6,7,10];
console.log(findSpecialInteger(arr));
