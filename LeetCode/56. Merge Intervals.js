/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 1. 核心：必须按左边界排序
  // 时间复杂度主要消耗在这里 O(N log N)
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. 初始化结果数组 (题目保证 length >= 1)
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    // 取出结果数组中最后一个区间（也就是最右边那个，作为比较基准）
    const prev = merged[merged.length - 1];

    // 3. 判断是否重叠
    // 如果当前区间的开始时间 <= 上一个区间的结束时间
    if (curr[0] <= prev[1]) {
      // [合并]：不需要 push 新区间，而是扩展旧区间的结束时间
      // 重点：要取两者结束时间的最大值（防止 [1,4] 包住 [2,3] 的情况）
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // [不重叠]：直接推入结果数组
      merged.push(curr);
    }
  }

  return merged;
};
