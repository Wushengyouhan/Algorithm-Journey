// 01背包问题2维数组解法
function testWeightBagProblem(weight, value, size) {
  const len = weight.length;

  // 1. 创建二维数组 dp[len][size + 1]
  const dp = Array.from({ length: len }, () => new Array(size + 1).fill(0));

  // 2. 初始化第一行 (i=0)
  // 只要背包容量 j 大于等于物品 0 的重量，就都能装入
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  // 3. 填表
  // 先遍历物品，再遍历背包
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= size; j++) {
      // 如果背包容量 j 小于当前物品重量，装不下，只能继承上一行的
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 能装下，比较 "不装" 和 "装" 哪个价值大
        dp[i][j] = Math.max(
          dp[i - 1][j], // 不装
          dp[i - 1][j - weight[i]] + value[i] // 装
        );
      }
    }
  }

  // 4. 返回右下角的结果
  return dp[len - 1][size];
}

// 测试
const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;
console.log(testWeightBagProblem(weight, value, size)); // 输出 35
