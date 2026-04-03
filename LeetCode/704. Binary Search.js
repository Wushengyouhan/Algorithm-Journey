/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1. 初始化双指针
  // right 设为 nums.length，是为了兜底 target 比所有元素都大的情况
  let left = 0;
  let right = nums.length;

  // 2. 左闭右闭的判断条件
  while (left <= right) {
    // 防止溢出的标准中间值取法
    // let mid = left + Math.floor((right - left) / 2);
    let mid = Math.floor((left + right) / 2); // JS 中数组不大，这样写也行

    // 3. 核心：寻找左边界 (Lower Bound)
    // 只要当前值 >= target，就不停地往左边收缩
    if (nums[mid] >= target) {
      // target 在左半区，或者正好是 mid (但我们要找最左边的，所以继续砍掉右边)
      right = mid - 1;
    } else {
      // nums[mid] < target，说明 target 在右半区
      left = mid + 1;
    }
  }

  // 4. 审判最终的 left 位置
  // 循环结束时，left 的含义是："第一个大于或等于 target 的元素的下标"

  // 如果 left 越界了 (说明 target 比所有数字都大)
  // 或者 left 指向的数字根本不是 target (说明遇到了比它大的数，target 本身不存在)
  if (left === nums.length || nums[left] !== target) {
    return -1;
  }

  // 完美命中
  return left;
};
