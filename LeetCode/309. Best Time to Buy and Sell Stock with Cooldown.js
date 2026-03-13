/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n < 2) return 0;

  const dp = Array.from({ length: n }, () => [0, 0, 0]);

  // 初始化第 0 天
  dp[0][0] = -prices[0]; // 0: 持有
  dp[0][1] = 0; // 1: 自由身 (本来就没有)
  dp[0][2] = 0; // 2: 刚卖出 (受限身)

  for (let i = 1; i < n; i++) {
    // 1. 持有：昨天就持有 vs 昨天自由，今天买入
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);

    // 2. 自由：昨天就自由 vs 昨天刚卖出，今天解冻
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2]);

    // 3. 刚卖出：昨天必须持有，今天卖掉
    dp[i][2] = dp[i - 1][0] + prices[i];
  }

  // 只要今天手里没股票，哪个赚得多拿哪个
  return Math.max(dp[n - 1][1], dp[n - 1][2]);
};
