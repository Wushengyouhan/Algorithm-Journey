/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  const n = nums.length;
  const s = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + nums[i];
  }

  for (let i = 0; i < s.length; i++) {
    let remainder = s[i] % k;
    if (map.has(remainder)) {
      // 如果这个余数之前出现过，取出它第一次出现的下标
      const preIndex = map.get(remainder);
      if (i - preIndex >= 2) {
        return true;
      }
    } else {
      // 第一次出现，放入数组
      map.set(remainder, i);
    }
  }
  return false;
};
