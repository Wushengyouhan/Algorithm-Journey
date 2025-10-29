/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let ans = 0;
  let preMin = Infinity;
  for (const x of nums) {
    ans = Math.max(ans, x - preMin); // 把 x 当作 nums[j]
    preMin = Math.min(preMin, x); // 把 x 当作 nums[i]
  }
  // 如果ans = 0, 返回-1
  return ans || -1;
};
