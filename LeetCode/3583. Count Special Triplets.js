/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const MOD = 1_000_000_007;
  const suf = new Map();
  for (const x of nums) {
    suf.set(x, (suf.get(x) || 0) + 1);
  }

  let ans = 0;
  const pre = new Map();

  for (const x of nums) {
    // 从后缀统计中移除
    suf.set(x, (suf.get(x) || 0) - 1);
    ans += (pre.get(2 * x) || 0) * (suf.get(2 * x) || 0);
    // 加入前缀统计
    pre.set(x, (pre.get(x) || 0) + 1);
  }
  return ans % MOD;
};
