/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; // 左指针，指向最左端的木板
  let right = height.length - 1; // 右指针，指向最右端的木板
  let maxArea = 0; // 全局最大面积

  // 当左右指针没有相遇时，持续探索
  while (left < right) {
    // 1. 计算当前窗口宽和高
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    // 2. 打擂台，更新历史最大面积
    maxArea = Math.max(maxArea, w * h);

    // 3. 核心贪心策略：移动较短的那块木板
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
