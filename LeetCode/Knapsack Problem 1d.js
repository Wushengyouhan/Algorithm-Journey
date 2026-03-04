/**
 * 0-1 背包问题（一维滚动数组解法）
 * @param {number[]} weight - 物品重量数组
 * @param {number[]} value - 物品价值数组
 * @param {number} size - 背包最大容量
 * @returns {number} - 背包能装入的最大价值
 */
function testWeightBagProblem1D(weight, value, size) {
  const len = weight.length;

  // 1. 初始化 DP 数组，长度为 size + 1，默认全为 0
  const dp = new Array(size + 1).fill(0);

  // 2. 遍历顺序：先遍历物品，再遍历背包
  for (let i = 0; i < len; i++) {
    // 3. 倒序遍历背包容量！避免物品被重复放入！
    // 结束条件 j >= weight[i] 巧妙地处理了装不下的情况
    for (let j = size; j >= weight[i]; j--) {
      // 4. 状态转移方程：取“不装”和“装”的最大值
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  // 返回背包最大容量对应的最大价值
  return dp[size];
}

// 🧪 测试用例
const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;
console.log(testWeightBagProblem1D(weight, value, size)); // 输出 35
