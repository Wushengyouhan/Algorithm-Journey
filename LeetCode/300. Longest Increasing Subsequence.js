/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  // 1. 初始化 DP 数组，所有元素默认长度至少为 1
  const dp = new Array(nums.length).fill(1);
  let maxAns = 1; // 记录全局最大长度

  // 2. 外层循环：遍历每一个元素 i
  for (let i = 1; i < nums.length; i++) {
    // 3. 内层循环：回头看 i 前面的所有元素 j
    for (let j = 0; j < i; j++) {
      // 如果当前的数比前面的数大，说明可以接在它后面
      if (nums[i] > nums[j]) {
        // 状态转移：取 "原来的 dp[i]" 和 "接在 j 后面 (dp[j]+1)" 的较大值
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 4. 时刻更新全局最大值
    maxAns = Math.max(maxAns, dp[i]);
  }

  return maxAns;
};
