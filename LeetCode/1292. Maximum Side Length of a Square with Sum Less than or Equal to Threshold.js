/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length;
  const n = mat[0].length;

  // 1. 构建二维前缀和数组 P (哨兵思想)
  // P[i+1][j+1] 表示 (0,0) 到 (i,j) 的矩形和
  const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 填表公式：自己 + 上 + 左 - 左上
      P[i + 1][j + 1] = P[i][j + 1] + P[i + 1][j] + mat[i][j] - P[i][j];
    }
  }

  // 2. 枚举边长 k
  // 策略：贪心法，从最大的可能边长开始往下找
  // 一旦找到一个符合条件的，立马返回，因为我们求的是"最大"
  for (let k = Math.min(m, n); k > 0; k--) {
    // 3. 枚举所有可能的左上角 (i, j)
    // 边界控制：保证从 i 开始往下能放下 k 行，从 j 开始往右能放下 k 列
    for (let i = 0; i <= m - k; i++) {
      for (let j = 0; j <= n - k; j++) {
        // 确定正方形的边界
        // 左上角 (r1, c1) = (i, j)
        // 右下角 (r2, c2) = (i + k - 1, j + k - 1)
        let r1 = i;
        let c1 = j;
        let r2 = i + k - 1;
        let c2 = j + k - 1;

        // 4. 利用前缀和 O(1) 计算区域和
        // 公式：右下 - 上 - 左 + 左上
        // 注意：P 数组下标需要 +1
        // P[r2+1][c2+1] 对应右下角
        // P[r1][c2+1]   对应上半部分 (剔除)
        // P[r2+1][c1]   对应左半部分 (剔除)
        // P[r1][c1]     对应左上角 (补回)
        const sum = P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1];

        // 只要找到任意一个正方形的和 <= 阈值，这个 k 就是答案
        if (sum <= threshold) return k;
      }
    }
  }

  // 如果连 k=1 都不满足（说明矩阵里所有元素都大于 threshold），返回 0
  return 0;
};
