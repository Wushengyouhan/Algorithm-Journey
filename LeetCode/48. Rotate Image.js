/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    // 1. 转置第 i 行
    // 细节：j 从 i + 1 开始，不仅跳过了对角线无意义的自我交换，
    // 也是避免把之前换好的元素又换回去的关键！
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }

    // 2. 此时第 i 行已完全获取了转置后的最终数据
    // 因为后续的转置全在右下角子矩阵中进行，绝不会再触碰第 i 行
    // 所以直接当场翻转第 i 行，逻辑完美闭环！
    matrix[i].reverse();
  }
};
