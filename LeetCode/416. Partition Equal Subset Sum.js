/**
 * 416. 分割等和子集
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 1. 求出所有积木的总长度
  const sum = nums.reduce((a, b) => a + b, 0);

  // 2. 如果总长度是奇数，绝对不可能平分出两个整数，直接 false
  if (sum % 2 !== 0) return false;

  // 盒子的目标长度 (背包容量)
  const target = sum / 2;

  // 3. 初始化 DP 数组，dp[j] 表示容量为 j 的盒子最多能装多长的积木
  const dp = new Array(target + 1).fill(0);

  // 4. 遍历每个积木 (物品)
  for (let i = 0; i < nums.length; i++) {
    // 5. 倒序遍历盒子的容量！确保积木只放一次！
    // 只要盒子容量 j 还能装得下当前积木 nums[i]，就尝试去装
    for (let j = target; j >= nums[i]; j--) {
      // 状态转移方程：比较“不放当前积木”和“放当前积木”哪个能填得更满
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  // 6. 最终检验：容量为 target 的盒子，刚好装了长度为 target 的积木吗？
  return dp[target] === target;
};
