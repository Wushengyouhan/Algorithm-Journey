/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 初始化位置：空降到右上角 (第 0 行，最后一列)
  let row = 0;
  let col = n - 1;

  // 只要没有走出矩阵的边界，就继续找
  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // 命中目标！
    } else if (matrix[row][col] > target) {
      // 当前值太大，往左走 (排除当前列)
      col--;
    } else {
      // 当前值太小，往下走 (排除当前行)
      row++;
    }
  }

  // 走出边界还没找到，说明不在矩阵中
  return false;
};
