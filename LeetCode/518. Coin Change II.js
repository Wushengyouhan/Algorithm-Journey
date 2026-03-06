/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // 1. 初始化 DP 数组
  const dp = new Array(amount + 1).fill(0);

  // 2. Base Case: 凑出 0 元有一种方案（空集）
  dp[0] = 1;

  // 3. 外层遍历物品（保证组合数，消除顺序影响）
  for (const coin of coins) {
    // 4. 内层遍历背包（正序，因为是完全背包，硬币无限）
    for (let j = coin; j <= amount; j++) {
      // 状态转移：叠加方案
      dp[j] += dp[j - coin];
    }
  }

  return dp[amount];
};
