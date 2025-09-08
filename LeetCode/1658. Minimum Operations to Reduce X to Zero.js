/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const target = nums.reduce((acc, curr) => acc + curr, 0) - x;
  let left = 0;
  let sum = 0;
  let ans = -1;

  for (let right = 0; right < nums.length; right++) {
    // 1.进
    sum += nums[right];

    while (sum > target) {
      sum -= nums[left];
      left++;
    }

    if (sum === target) {
      ans = Math.max(ans, right - left + 1);
    }
  }

  return ans === -1 ? -1 : nums.length - ans;
};
