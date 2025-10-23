/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length;
  function check(m) {
    // 检查这个位置的引用是不是 够mid次
    // 终点 n - 1
    // 起点 n - m
    // 中间正好m个数
    return citations[n - m] >= m;
  }

  // 至少有1篇大于等于1次
  let left = 1;
  // 至少有n篇大于等于n次
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      // 询问范围缩小到 [mid+1, right]
      left = mid + 1;
    } else {
      // 询问范围缩小到 [left, mid-1]
      right = mid - 1;
    }
  }
  return right;
};
