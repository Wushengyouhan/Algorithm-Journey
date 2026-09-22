/**
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (price, target) {
  let left = 0;
  let right = price.length - 1;

  // 当两指针相遇前，持续往中间夹击
  while (left < right) {
    const sum = price[left] + price[right];

    if (sum === target) {
      return [price[left], price[right]]; // 命中目标
    } else if (sum > target) {
      right--; // 和太大，缩小右边界
    } else {
      left++; // 和太小，增大左边界
    }
  }

  return []; // 如果没找到（按照题意通常一定能找到）
};
