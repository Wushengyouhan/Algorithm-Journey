/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 1. 剪枝：如果起点或终点就是障碍物，直接没戏
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  // 初始化 DP 数组，全部填充 0
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // 2. 初始化第一列
  for (let i = 0; i < m; i++) {
    // 遇到障碍物，后面的格子都走不到，保持 0，直接退出循环
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }

  // 3. 初始化第一行
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) break;
    dp[0][j] = 1;
  }

  // 4. 遍历填表
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 如果当前是障碍物，路径数为 0
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        // 否则：上 + 左
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
