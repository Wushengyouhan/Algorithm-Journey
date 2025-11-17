/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  const s = Array(nums.length + 1);
  s[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    s[i + 1] = s[i] + nums[i];
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const start = Math.max(0, i - nums[i]);
    ans += s[i + 1] - s[start];
  }
  return ans;
};
