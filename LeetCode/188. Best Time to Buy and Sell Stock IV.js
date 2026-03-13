/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0 || k === 0) return 0;

  const n = prices.length;
  // DP 数组初始化，n 行，2k+1 列
  const dp = Array.from({ length: n }, () => new Array(2 * k + 1).fill(0));

  // 1. 初始化第 0 天
  for (let j = 1; j < 2 * k + 1; j += 2) {
    // 奇数是买入状态，统统初始化为 -prices[0]
    dp[0][j] = -prices[0];
  }

  // 2. 遍历天数
  for (let i = 1; i < n; i++) {
    // 3. 遍历状态
    for (let j = 1; j < 2 * k + 1; j++) {
      if (j % 2 === 1) {
        // 奇数状态：买入
        // max(昨天不操作保持买入, 昨天处于前一次卖出状态 然后今天买入)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
      } else {
        // 偶数状态：卖出
        // max(昨天不操作保持卖出, 昨天处于当次买入状态 然后今天卖出)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
      }
    }
  }

  // 4. 返回最后一天，第 k 次卖出时的最大收益
  return dp[n - 1][2 * k];
};
