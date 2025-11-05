/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  // 反转正整数
  function rev(x) {
    let res = 0;
    while (x) {
      res = res * 10 + (x % 10);
      x = Math.trunc(x / 10);
    }
    return res;
  }

  let ans = 0;
  const MOD = 1_000_000_007;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const c = map.get(nums[i] - rev(nums[i])) || 0;
    ans += c;
    map.set(nums[i] - rev(nums[i]), c + 1);
  }
  return ans % MOD;
};
