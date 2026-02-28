/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 处理边界
  if (n <= 2) return n;

  // 1. 定义 DP 数组
  const dp = new Array(n + 1);

  // 2. 初始化
  dp[1] = 1;
  dp[2] = 2;

  // 3. 遍历填表
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
