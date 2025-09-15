/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1; // 闭区间 [left, right]
  while (left <= right) {
    // 区间不为空
    // 循环不变量：
    // nums[left-1] < target
    // nums[right+1] >= target
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; // 范围缩小到 [mid+1, right]
    } else {
      right = mid - 1; // 范围缩小到 [left, mid-1]
    }
  }
  return left;
};
