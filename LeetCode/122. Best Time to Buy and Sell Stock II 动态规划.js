/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n === 0) return 0;

  // dp 数组：n 行 2 列
  const dp = Array.from({ length: n }, () => [0, 0]);

  // 初始化第 0 天
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    // 今天不持有 = max(昨天也不持有, 昨天持有今天卖出)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);

    // 今天持有 = max(昨天也持有, 今天刚买入)
    // 关键点：今天买入花的是昨天不持有的钱 (dp[i-1][0])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[n - 1][0];
};
