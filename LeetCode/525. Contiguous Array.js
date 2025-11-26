/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const n = nums.length;
  let ans = 0;
  let s = Array(n + 1).fill(0);
  const map = new Map();

  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + (nums[i] === 1 ? 1 : -1);
  }

  for (let i = 0; i < s.length; i++) {
    const sum = s[i];
    if (map.has(sum)) {
      ans = Math.max(ans, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return ans;
};
