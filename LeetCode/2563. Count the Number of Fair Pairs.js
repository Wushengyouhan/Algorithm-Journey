/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  let ans = 0;
  nums.sort((a, b) => a - b);

  for (let j = 0; j < nums.length; j++) {
    let l = lowerBound(nums, j - 1, lower - nums[j]);
    let r = lowerBound(nums, j - 1, upper - nums[j] + 1);
    ans += r - l;
  }
  return ans;
};
var lowerBound = function (nums, r, target) {
  let left = 0;
  let right = r;
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
