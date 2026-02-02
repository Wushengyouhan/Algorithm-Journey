/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 1. 初始化 DP 数组
  // 长度为 amount + 1 (因为包含 0)
  // 填充 Infinity 表示默认无法凑出
  const dp = new Array(amount + 1).fill(Infinity);

  // 2. Base Case
  dp[0] = 0;

  // 3. 动态规划填表
  // 外层遍历金额，内层遍历硬币 (或者反过来也可以)
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // 如果当前金额 i 足够减去这枚硬币
      if (i - coin >= 0) {
        // 核心转移方程：
        // 当前硬币数 = 凑齐(i-coin)的硬币数 + 1
        // 取最小值
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // 4. 返回结果
  // 如果 dp[amount] 还是初始值 Infinity，说明没凑出来，返回 -1
  return dp[amount] === Infinity ? -1 : dp[amount];
};
