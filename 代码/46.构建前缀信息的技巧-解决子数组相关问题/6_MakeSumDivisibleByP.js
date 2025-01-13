/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  // 整体余数
  let mod = 0;
  for (let num of nums) {
    mod = (mod + num) % p;
  }

  if (mod === 0) {
    return mod;
  }

  // key: 前缀和 % p 的余数
  // value: 最晚出现的位置
  const map = new Map();
  map.set(0, -1);

  let ans = Infinity;

  for (let i = 0, cur = 0; i < nums.length; i++) {
    // 0...i这部分的余数
    cur = (cur + nums[i]) % p;
    // 希望find..i的余数是mod
    // 0..find的余数就是 cur - mod
    // 余数需要大于0，所以加个p
    const find = cur >= mod ? cur - mod : cur + p - mod;

    if (map.has(find)) {
      ans = Math.min(ans, i - map.get(find));
    }
    map.set(cur, i);
  }
  // 全部移除就返回-1
  return ans === nums.length ? -1 : ans;
};
