/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  // 1. 定义 dp 数组，长度 n+1
  const dp = new Array(n + 1).fill(0);

  // 2. 初始化 Base Case
  dp[0] = 0; // 没房子
  dp[1] = nums[0]; // 只有 1 间房

  // 3. 状态转移
  for (let i = 2; i <= n; i++) {
    // 偷当前这间房（nums[i-1]） vs 不偷
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[n];
};
