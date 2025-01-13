/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let ans = 0;
  map.set(0, 1);
  // 以i位置结尾，有多少个子数组
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    ans += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return ans;
};
