/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let ans = 0;
  const cnt = new Map();
  for (const [x1, y1] of points) {
    cnt.clear();
    for (const [x2, y2] of points) {
      const d = (x1 - x2) ** 2 + (y1 - y2) ** 2;
      const c = cnt.get(d) ?? 0;
      // 这里需考虑顺序
      ans += c * 2;
      cnt.set(d, c + 1);
    }
  }
  return ans;
};
