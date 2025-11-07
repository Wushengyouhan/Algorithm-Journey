/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  // 后缀最大值数组
  const sufMax = Array(n);
  sufMax[n - 1] = nums[n - 1];
  for (let i = n - 2; i > 1; i--) {
    sufMax[i] = Math.max(sufMax[i + 1], nums[i]);
  }
  // 前缀最大值数组
  const preMax = Array(n);
  preMax[0] = nums[0];
  for (let i = 1; i < n - 1; i++) {
    preMax[i] = Math.max(preMax[i - 1], nums[i]);
  }

  let ans = 0;
  for (let j = 1; j < n - 1; j++) {
    ans = Math.max(ans, (preMax[j - 1] - nums[j]) * sufMax[j + 1]);
  }
  return ans;
};
