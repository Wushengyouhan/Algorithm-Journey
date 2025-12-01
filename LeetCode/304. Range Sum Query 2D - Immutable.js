class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    // 1. 初始化前缀和数组 (Padding / 哨兵思想)
    // 大小为 (m+1) x (n+1)，第 0 行和第 0 列作为哨兵，初始值为 0
    // 目的：处理边界情况（如 i-1 或 j-1），避免数组越界判断
    // 映射：this.sum[i+1][j+1] 存储的是 matrix (0,0) 到 (i,j) 的矩形和
    this.sum = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // 2. 遍历矩阵，填表构建前缀和
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 核心公式（容斥原理）：当前前缀和 = 当前值 + 上 + 左 - 左上
        this.sum[i + 1][j + 1] =
          matrix[i][j] + // 1. 当前 matrix 格子的数值
          this.sum[i][j + 1] + // 2. 上方的大矩形和 (对应 matrix 行下标 i-1)
          this.sum[i + 1][j] - // 3. 左边的大矩形和 (对应 matrix 列下标 j-1)
          this.sum[i][j]; // 4. 减去左上角重叠被加了两次的部分
      }
    }
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    // 3. 查表计算任意子矩阵和 (图形剪裁)
    // 公式：目标区域 = 右下角(大满贯) - 上半部 - 左半部 + 左上角(补回冤假错案)

    return (
      this.sum[row2 + 1][col2 + 1] - // 右下角 (包含 row2, col2 的大矩形)
      this.sum[row1][col2 + 1] - // 上半部 (减去 row1 上面的所有行)
      this.sum[row2 + 1][col1] + // 左半部 (减去 col1 左边的所有列)
      this.sum[row1][col1] // 左上角 (因为减了两次，必须补回来)
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
