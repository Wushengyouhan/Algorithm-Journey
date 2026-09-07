/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 题目条件明确 1 <= m, n <= 300，因此无需写 !matrix 等判空废话
  const m = matrix.length;
  const n = matrix[0].length;

  // dp 数组整体大一圈，充当安全边界 (哨兵 Padding)
  // dp[i][j] 代表以原矩阵 matrix[i-1][j-1] 为右下角的最大边长
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let maxSide = 0; // 记录历史出现过的最大边长

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 只有当前真实的格子是 '1'，才有可能构成正方形
      if (matrix[i - 1][j - 1] === '1') {
        // 边长受限于左、上、左上邻居中最短的那一块木板
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        // 实时打擂台，更新最大边长
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  // 返回最大面积 (边长 * 边长)
  return maxSide * maxSide;
};
