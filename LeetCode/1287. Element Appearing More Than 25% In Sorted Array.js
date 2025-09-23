/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const m = Math.floor(arr.length / 4);
  for (let i of [m, 2 * m + 1]) {
    if (lowerBound(arr, arr[i] + 1) - lowerBound(arr, arr[i]) > m) {
      return arr[i];
    }
  }
  // 如果答案不是 arr[m] 也不是 arr[2m+1]，那么答案一定是 arr[3m+2]
  return arr[3 * m + 2];
};

var lowerBound = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
