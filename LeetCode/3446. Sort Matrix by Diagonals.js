/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // k = i - j + n
  // 右上角 k = 1
  // 左下角 k = m + n -1
  for (let k = 1; k < m + n; k++) {
    // 核心: 计算j的最小值和最大值
    // 最小值i取0
    const minJ = Math.max(n - k, 0);
    // 最大值i取m-1
    const maxJ = Math.min(m - 1 + n - k, n - 1);
    const a = [];
    // 遍历对角线
    for (let j = minJ; j <= maxJ; j++) {
      a.push(grid[k + j - n][j]);
    }

    // 排序
    if (minJ > 0) {
      // 右上角三角形
      a.sort((x, y) => x - y);
    } else {
      // 左下角三角形
      a.sort((x, y) => y - x);
    }

    // 写回数据
    for (let j = minJ; j <= maxJ; j++) {
      grid[k + j - n][j] = a[j - minJ];
    }
  }
  return grid;
};
