/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const neg = lowerBound(nums, 0);
  const pos = nums.length - lowerBound(nums, 1);
  return Math.max(neg, pos);
};

function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
