/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 1. 创建二维数组 dp[m][n]
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // 2. 初始化第一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  // 3. 初始化第一行
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // 4. 遍历填表
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 核心方程：上 + 左
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
