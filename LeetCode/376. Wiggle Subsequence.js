/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;

  let prevDiff = 0; // 上一次的差值（趋势）
  let currDiff = 0; // 当前的差值
  let count = 1; // 默认序列长度为1 (至少包含起点)

  for (let i = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1];

    // 核心判断：出现拐点
    // 1. (prev<=0 && curr>0): 以前是平或下，现在上 -> 山谷
    // 2. (prev>=0 && curr<0): 以前是平或上，现在下 -> 山峰
    if ((prevDiff <= 0 && currDiff > 0) || (prevDiff >= 0 && currDiff < 0)) {
      count++;
      // 【关键点】：只有发生了摆动（方向改变），才更新 prevDiff
      // 这样可以自动过滤掉单调区间内的平路干扰 (如 1,2,2,3)
      prevDiff = currDiff;
    }
  }

  return count;
};
