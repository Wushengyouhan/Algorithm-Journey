/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 1. 初始化两个二维前缀和数组 (哨兵思想)
  // X[i+1][j+1] 表示从 (0,0) 到 (i,j) 矩形内 'X' 的个数
  // Y[i+1][j+1] 表示从 (0,0) 到 (i,j) 矩形内 'Y' 的个数
  const X = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  const Y = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 当前格子是否贡献 X 或 Y
      const isX = grid[i][j] === 'X' ? 1 : 0;
      const isY = grid[i][j] === 'Y' ? 1 : 0;

      // 2. 核心公式：上 + 左 - 左上 + 自己
      X[i + 1][j + 1] = X[i][j + 1] + X[i + 1][j] - X[i][j] + isX;
      Y[i + 1][j + 1] = Y[i][j + 1] + Y[i + 1][j] - Y[i][j] + isY;

      // 3. 判断是否满足题目条件
      // 条件1: X的数量 > 0
      // 条件2: X的数量 == Y的数量
      if (X[i + 1][j + 1] > 0 && X[i + 1][j + 1] === Y[i + 1][j + 1]) {
        ans++;
      }
    }
  }

  return ans;
};
