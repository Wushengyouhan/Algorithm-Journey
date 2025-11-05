/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var maximumProduct = function (nums, m) {
  let ans = -Infinity;
  // 维护起点的最大最小值
  let sMin = Infinity;
  let sMax = -Infinity;

  for (let i = m - 1; i < nums.length; i++) {
    // 这个点的起点值
    const y = nums[i - m + 1];
    sMin = Math.min(sMin, y);
    sMax = Math.max(sMax, y);
    ans = Math.max(ans, sMin * nums[i], sMax * nums[i]);
  }

  return ans;
};
