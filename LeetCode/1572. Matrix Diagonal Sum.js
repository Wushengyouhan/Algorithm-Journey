/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let n = mat.length;
  let mid = Math.floor(n / 2);

  for (let i = 0, j = n - 1; i < n; i++, j--) {
    sum = sum + mat[i][i] + mat[i][j];
  }

  return n % 2 === 0 ? sum : sum - mat[mid][mid];
};