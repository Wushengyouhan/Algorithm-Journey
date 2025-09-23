/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  function check(m) {
    let sum = 0;
    for (const x of nums) {
      sum += Math.ceil(x / m);
      if (sum > threshold) {
        // 提前退出循环
        return false;
      }
    }
    return true;
  }

  let left = 0;
  // 可选择的最大值就是数组中的最大值
  let right = Math.max(...nums);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
