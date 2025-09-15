/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let used = 0;
  let ans = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 先为right进来创造好条件
    while ((used & nums[right]) !== 0) {
      used ^= nums[left];
      left++;
    }

    // 2. 入队
    used ^= nums[right];

    // 3. 更新
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
