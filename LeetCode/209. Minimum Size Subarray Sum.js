/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0; // 滑动窗口的左边界
  let sum = 0; // 滑动窗口内元素的总和
  let minLen = Infinity; // 记录最小长度，初始设为无穷大

  // right 是滑动窗口的右边界，它一直往右扩
  for (let right = 0; right < nums.length; right++) {
    // 1. 进货：把右边的元素加进窗口
    sum += nums[right];

    // 2. 吐货（核心）：只要窗口内的和达标了，就尝试缩小窗口
    while (sum >= target) {
      // 记录当前满足条件的窗口长度，挑战历史最短记录
      // 长度 = 右下标 - 左下标 + 1
      minLen = Math.min(minLen, right - left + 1);

      // 尝试把最左边的元素踢出窗口，看看剩下的和是不是还能达标
      sum -= nums[left];
      // 左边界向右收缩
      left++;
    }
  }

  // 如果 minLen 还是 Infinity，说明整个数组加起来都没达到 target
  // 题目要求返回 0
  return minLen === Infinity ? 0 : minLen;
};
