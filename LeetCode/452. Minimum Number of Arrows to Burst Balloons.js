/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;

  // 1. 贪心第一步：按右边界从小到大排序
  points.sort((a, b) => a[1] - b[1]);

  let count = 1; // 至少一支箭
  let arrowPos = points[0][1]; // 第一支箭射在第一个气球的右边缘

  for (let i = 1; i < points.length; i++) {
    const start = points[i][0];
    const end = points[i][1];

    // 2. 如果气球开始位置 > 箭的位置，说明脱靶了
    // 需要新增一支箭，并更新射击位置为当前气球的右边缘
    if (start > arrowPos) {
      count++;
      arrowPos = end;
    }
    // else: 否则说明 start <= arrowPos，被穿透了，忽略
  }

  return count;
};
