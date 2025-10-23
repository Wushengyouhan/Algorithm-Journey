/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function (points, s) {
  const n = points.length;
  let ans = 0;
  // size为正方形的半边长
  function check(size) {
    const seenLabels = new Set(); // 用集合记录已经出现的标签
    for (let i = 0; i < n; i++) {
      if (Math.abs(points[i][0]) <= size && Math.abs(points[i][1]) <= size) {
        const label = s[i];
        // 如果标签已存在，说明有重复
        if (seenLabels.has(label)) {
          return false;
        }
        // 如果标签没有重复，加入集合
        seenLabels.add(label);
      }
    }
    // 集合的大小是用size
    ans = Math.max(ans, seenLabels.size);
    return true;
  }

  let left = 0;
  let right = 1000000000;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
