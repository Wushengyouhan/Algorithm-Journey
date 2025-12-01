/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 1. 初始化二维前缀异或数组 P (带哨兵思想)
  // 大小为 (m+1) x (n+1)，第 0 行和第 0 列作为哨兵，填充 0
  // P[i+1][j+1] 表示矩阵从左上角 (0,0) 到 (i,j) 的矩形范围内所有元素的异或和
  const P = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 用于收集所有的“坐标值”（即所有可能的子矩阵异或和）
  const ans = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 2. 核心递推公式（容斥原理）
      // 这里的逻辑与“二维前缀和”完全一致：
      // Sum(i,j) = Sum(上) ^ Sum(左) ^ Sum(左上) ^ Val(i,j)

      // 为什么是异或三次？
      // - P[i][j+1] (上) 包含了左上角区域
      // - P[i+1][j] (左) 也包含了左上角区域
      // - 两个包含左上角的值异或，导致左上角区域变成了 0 (因为 x ^ x = 0)
      // - 所以必须再异或一次 P[i][j] (左上)，把这块区域补回来
      P[i + 1][j + 1] =
        P[i][j + 1] ^ // 上
        P[i + 1][j] ^ // 左
        P[i][j] ^ // 左上 (补回重叠部分)
        matrix[i][j]; // 当前元素

      // 将计算出的坐标值存入数组
      ans.push(P[i + 1][j + 1]);
    }
  }

  // 3. 排序并返回第 K 大
  // b - a 表示降序排列（从大到小）
  ans.sort((a, b) => b - a);

  // 第 k 大的数，对应的数组下标是 k-1
  return ans[k - 1];
};
