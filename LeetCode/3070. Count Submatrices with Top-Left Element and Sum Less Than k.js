/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  // 1. 初始化前缀和数组 P (哨兵思想，多一行一列)
  // P[i+1][j+1] 表示从矩阵绝对左上角 (0,0) 到 (i,j) 的矩形元素总和
  const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let ans = 0; // 用于记录满足条件的子矩阵数量

  // 2. 构建二维前缀和
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 核心填表公式：当前值 + 上 + 左 - 左上
      P[i + 1][j + 1] = P[i][j + 1] + P[i + 1][j] + grid[i][j] - P[i][j];
    }
  }

  // 3. 遍历每一个可能的右下角坐标 (i, j)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 计算以 (0,0) 为左上角，(i,j) 为右下角的子矩阵和
      // 代码写的是通用的区域求和公式：右下 - 上 - 左 + 左上
      // 但因为左上角固定是 (0,0)，即 row1=0, col1=0
      // sum = P[i + 1][j + 1] - P[0][j + 1] - P[i + 1][0] + P[0][0]
      // 所以 P[0][...] 其实都是 0，这里 sum 的值实际上就等于 P[i+1][j+1]
      const sum = P[i + 1][j + 1];
      // 判断条件：如果和小于等于 k
      if (sum <= k) {
        ans++;
      }
    }
  }

  return ans;
};
