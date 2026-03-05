/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 1. 计算总重量 Sum
  const sum = stones.reduce((acc, curr) => acc + curr, 0);

  // 2. 确定背包容量 Target (向下取整)
  // 我们的目标是让凑出的重量尽可能接近 sum / 2
  const target = Math.floor(sum / 2);

  // 3. 初始化 DP 数组
  // dp[j] 表示容量为 j 的背包能装的最大重量
  // 初始全为 0
  const dp = new Array(target + 1).fill(0);

  // 4. 遍历物品 (石头)
  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];

    // 5. 遍历背包容量 (倒序)
    // 必须倒序，防止同一个石头被重复放入
    for (let j = target; j >= stone; j--) {
      // 状态转移：不放 vs 放
      dp[j] = Math.max(dp[j], dp[j - stone] + stone);
    }
  }

  // 6. 计算最终碰撞结果
  // 大堆重量 - 小堆重量
  // (sum - dp[target]) - dp[target]
  return sum - 2 * dp[target];
};
