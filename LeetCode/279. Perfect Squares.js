/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 1. 初始化 DP 数组
  // 长度 n + 1，默认值设为 i (最坏情况由 i 个 1 组成)
  const dp = new Array(n + 1).fill(0).map((_, idx) => idx);

  // 2. 遍历每一个数字 i (从 1 到 n)
  for (let i = 1; i <= n; i++) {
    // 3. 内层循环：尝试减去所有可能的完全平方数 j*j
    // j 从 1 开始，直到 j*j 超过 i
    for (let j = 1; j * j <= i; j++) {
      // 状态转移：当前最优 = min(当前最优, 减去平方数后的最优解 + 1)
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};
