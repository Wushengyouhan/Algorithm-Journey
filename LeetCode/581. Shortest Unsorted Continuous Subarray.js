/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length;
  let max = -Infinity; // 从左往右维护的最大值
  let min = Infinity; // 从右往左维护的最小值

  // 初始化边界
  // 巧妙设计：如果数组本来就有序，最后 right - left + 1 = -1 - 0 + 1 = 0
  let right = -1;
  let left = 0;

  // ⭐ 核心魔法：双变量 for 循环，i 负责从左往右，j 负责从右往左
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    // 1. i 从左往右寻找右边界
    if (nums[i] < max) {
      right = i; // 遇到比历史最大值小的，说明无序，记录位置
    } else {
      max = nums[i]; // 更新最大值
    }

    // 2. j 从右往左寻找左边界
    if (nums[j] > min) {
      left = j; // 遇到比历史最小值大的，说明无序，记录位置
    } else {
      min = nums[j]; // 更新最小值
    }
  }

  return right - left + 1;
};
