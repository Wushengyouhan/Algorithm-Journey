/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let ans = 0;
  // 记录0的个数
  let cnt = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    cnt += nums[right] === 0 ? 1 : 0;

    while (cnt > k) {
      cnt -= nums[left] === 0 ? 1 : 0;
      left++;
    }

    // 2. 更新
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
