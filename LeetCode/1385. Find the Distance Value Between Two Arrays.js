/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let ans = 0;
  arr2.sort((a, b) => a - b);
  for (const x of arr1) {
    const i = lowerBound(arr2, x - d);
    if (arr2[i] > x + d || i === arr2.length) {
      ans++;
    }
  }
  return ans;
};

var lowerBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
