/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = Array(m)
    .fill()
    .map(() => Array(n).fill(0));
  const set = new Set();
  // k = i - j + n
  for (let k = 1; k < m + n; k++) {
    const minJ = Math.max(n - k, 0);
    const maxJ = Math.min(m - 1 + n - k, n - 1);
    set.clear();
    for (let j = minJ; j <= maxJ; j++) {
      const i = k + j - n;
      // topLeft[i][j] == set.size()
      ans[i][j] = set.size;
      set.add(grid[i][j]);
    }
    set.clear();
    for (let j = maxJ; j >= minJ; j--) {
      const i = k + j - n;
      // bottomRight[i][j] = set.size()
      ans[i][j] = Math.abs(ans[i][j] - set.size);
      set.add(grid[i][j]);
    }
  }
  return ans;
};
