/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function (grid) {
  // 统计每列有几个1，提前减1
  const n = grid[0].length;
  const colSum = Array(n).fill(-1);
  for (const row of grid) {
    for (let j = 0; j < n; j++) {
      colSum[j] += row[j];
    }
  }
  let ans = 0;
  for (const row of grid) {
    // 统计该行的，提前减1
    const rowSum = row.reduce((acc, curr) => acc + curr, 0) - 1;
    for (let j = 0; j < n; j++) {
      if (row[j] === 1) {
        ans += rowSum * colSum[j];
      }
    }
  }
  return ans;
};
