/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);

  // 1. 剪枝：如果和为奇数，或者 target 绝对值过大，无解
  // (target + sum) 必须能被 2 整除，因为 2 * sum(P) 是偶数
  if ((sum + target) % 2 !== 0 || Math.abs(target) > sum) {
    return 0;
  }

  // 2. 转化为 0-1 背包问题
  const bagSize = (sum + target) / 2;

  // 3. 初始化 dp
  const dp = new Array(bagSize + 1).fill(0);

  // 【关键】：装满容量 0 的方法有 1 种（即正数集合为空，全选负号）
  dp[0] = 1;

  // 4. 动态规划
  for (const num of nums) {
    // 倒序遍历，保证每个物品只用一次
    for (let j = bagSize; j >= num; j--) {
      // 组合类背包公式：当前方法数 = 不取num的方法 + 取num的方法
      dp[j] = dp[j] + dp[j - num];
    }
  }

  return dp[bagSize];
};
