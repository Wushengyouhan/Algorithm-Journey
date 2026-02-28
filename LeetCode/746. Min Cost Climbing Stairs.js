/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  // dp 数组长度为 n + 1，因为要到楼顶
  const dp = new Array(n + 1);

  // 1. 初始化：到达 0 和 1 都不需要花钱（还没开始爬）
  dp[0] = 0;
  dp[1] = 0;

  // 2. 遍历填表，直到楼顶 n
  for (let i = 2; i <= n; i++) {
    // 状态转移：选 (前一步累积 + 前一步路费) 和 (前两步累积 + 前两步路费) 中较小的
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};
