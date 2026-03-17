/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  if (n < 2) return 0;

  // dp[i][0]: 手上不持有股票的最大收益
  // dp[i][1]: 手上持有股票的最大收益
  const dp = Array.from({ length: n }, () => [0, 0]);

  // 初始化第一天
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    // 1. 不持有：昨天就不持有 vs 昨天持有今天卖出 (卖出时扣除手续费)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);

    // 2. 持有：昨天就持有 vs 昨天不持有今天买入
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[n - 1][0];
};
