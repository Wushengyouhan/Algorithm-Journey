/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 1. 预处理前缀和数组
  // rowSum[i][j] 表示第 i 行，前 j 个元素的和 (下标 0 到 j-1)
  // 注意：行前缀和需要多一列 (n + 1) 来处理边界
  const rowSum = Array.from({ length: m }, () => new Array(n + 1).fill(0));

  // colSum[i][j] 表示第 j 列，前 i 个元素的和 (下标 0 到 i-1)
  // 注意：列前缀和需要多一行 (m + 1) 来处理边界，且维度是 (m+1) x n
  const colSum = Array.from({ length: m + 1 }, () => new Array(n).fill(0));

  // 2. 填充前缀和
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 每一行的累加：当前位置值 + 这一行之前所有的和
      rowSum[i][j + 1] = rowSum[i][j] + grid[i][j];
      // 每一列的累加：当前位置值 + 这一列上面所有的和
      colSum[i + 1][j] = colSum[i][j] + grid[i][j];
    }
  }

  // 3. 从大到小枚举边长 k
  // 贪心策略：只要找到一个满足条件的，即为最大值，直接返回
  for (let k = Math.min(m, n); k >= 2; k--) {
    // 枚举左上角坐标 (i, j)
    // i 的范围保证：从 i 开始往下能放下 k 行 (i + k <= m -> i <= m - k)
    for (let i = 0; i <= m - k; i++) {
      // j 的范围保证：从 j 开始往右能放下 k 列 (j + k <= n -> j <= n - k)
      for (let j = 0; j <= n - k; j++) {
        if (isMagic(i, j, k)) {
          return k;
        }
      }
    }
  }

  // 如果没有任何大于 1 的幻方，单个格子本身就是幻方，返回 1
  return 1;

  // 辅助函数：判断以 (r, c) 为左上角，边长为 size 的正方形是否是幻方
  function isMagic(r, c, size) {
    // 先计算两条对角线，因为它们没有前缀和可用，必须 O(size) 暴力算
    // 同时可以用对角线的和作为后续比较的基准 (target)
    let diag1 = 0;
    let diag2 = 0;
    for (let d = 0; d < size; d++) {
      diag1 += grid[r + d][c + d]; // 主对角线 (左上 -> 右下)
      diag2 += grid[r + d][c + size - 1 - d]; // 副对角线 (右上 -> 左下)
    }

    if (diag1 !== diag2) return false;

    const target = diag1;

    // 检查每一行
    for (let row = 0; row < size; row++) {
      // 利用前缀和 O(1) 计算行区间和
      // 对应原数组 grid[r+row] 中下标 c 到 c+size-1 的和
      const currentSum = rowSum[r + row][c + size] - rowSum[r + row][c];
      if (currentSum !== target) return false;
    }

    // 检查每一列
    for (let col = 0; col < size; col++) {
      // 利用前缀和 O(1) 计算列区间和
      // 对应原数组 grid 中第 c+col 列，行下标 r 到 r+size-1 的和
      const currentSum = colSum[r + size][c + col] - colSum[r][c + col];
      if (currentSum !== target) return false;
    }

    return true;
  }
};
