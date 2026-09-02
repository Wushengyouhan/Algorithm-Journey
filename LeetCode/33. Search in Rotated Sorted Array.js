/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 取中点
    const mid = left + Math.floor((right - left) / 2);

    // 找到了直接下班
    if (nums[mid] === target) return mid;

    // 1. 判断左半部分是否有序 (注意一定要加等于号！)
    if (nums[left] <= nums[mid]) {
      // 左半区是绝对有序的，用铁笼子锁死范围
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1; // 猎物在笼子里，去左边抓
      } else {
        left = mid + 1; // 不在笼子里，只能去右边乱局里碰运气
      }
    }
    // 2. 左半部分不有序，那么右半部分必定是绝对有序的
    else {
      // 右半区是绝对有序的，用铁笼子锁死范围
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1; // 猎物在笼子里，去右边抓
      } else {
        right = mid - 1; // 不在笼子里，只能回左边找
      }
    }
  }

  // 找遍了都没有
  return -1;
};
