/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  // 1. 构建二维前缀和数组 P (Prefix Sum)
  // 大小设为 (m+1) x (n+1)，第 0 行/列作为哨兵，避免处理 i-1 的越界问题
  // P[i+1][j+1] 对应原矩阵 (0,0) 到 (i,j) 的矩形和
  const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 填表公式（容斥原理）：
      // 当前前缀和 = 上 + 左 + 自己 - 左上(重叠部分)
      P[i + 1][j + 1] = P[i][j + 1] + P[i + 1][j] + mat[i][j] - P[i][j];
    }
  }

  const answer = Array.from({ length: m }, () => new Array(n).fill(0));

  // 2. 遍历每个中心点 (i, j)，计算对应的 k 范围矩形和
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 确定子矩形的 左上角 (r1, c1) 和 右下角 (r2, c2)
      // 使用 Math.max/min 确保坐标限制在 [0, m-1] 和 [0, n-1] 范围内
      const r1 = Math.max(0, i - k);
      const c1 = Math.max(0, j - k);
      const r2 = Math.min(m - 1, i + k);
      const c2 = Math.min(n - 1, j + k);

      // 3. 查表计算 (图形剪裁)
      // 公式：右下(包含) - 上(剔除) - 左(剔除) + 左上(补回)
      // 映射关系：
      // - 包含的边界 (r2, c2) -> P 中下标 +1
      // - 剔除的边界 (r1, c1) -> P 中下标不变 (代表减去它之前的部分)
      answer[i][j] = P[r2 + 1][c2 + 1] - P[r1][c2 + 1] - P[r2 + 1][c1] + P[r1][c1];
    }
  }

  return answer;
};
