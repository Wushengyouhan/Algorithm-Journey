/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  // 1. 核心：按右边界从小到大排序
  intervals.sort((a, b) => a[1] - b[1]);

  let removeCount = 0;
  // 初始化：选中第一个区间，记录它的结束位置
  let end = intervals[0][1];

  // 2. 从第二个区间开始遍历
  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];

    // 3. 判断是否重叠
    if (currentStart < end) {
      // [重叠]
      // 因为我们是按结束时间排的，之前的区间肯定结束得更早（或相等）
      // 为了给后面留空间，贪心地移除当前这个“结束更晚/冲突”的区间
      removeCount++;
    } else {
      // [不重叠]
      // 更新边界，把当前区间纳入有效范围
      end = currentEnd;
    }
  }

  return removeCount;
};
