/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 1. 初始化 DP 数组，求最小值初始化为 Infinity
  const dp = new Array(n + 1).fill(Infinity);

  // 2. Base Case: 凑 0 需要 0 个数
  dp[0] = 0;

  // 3. 完全背包经典模板
  // 外层遍历物品：物品是 1^2, 2^2, 3^2... 直到 i^2 <= n
  for (let i = 1; i * i <= n; i++) {
    const square = i * i; // 当前物品的重量/面值

    // 内层遍历背包：完全背包必须正序遍历
    // 从当前物品的重量 square 开始，因为比它小的包根本装不下
    for (let j = square; j <= n; j++) {
      // 状态转移：对比不放和放哪个用的数量更少
      dp[j] = Math.min(dp[j], dp[j - square] + 1);
    }
  }

  return dp[n];
};
