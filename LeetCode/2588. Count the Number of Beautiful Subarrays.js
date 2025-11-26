/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
  const cnt = new Map();
  let ans = 0;
  let mask = 0;
  cnt.set(0, 1);

  for (const x of nums) {
    // 更新前缀异或
    mask = mask ^ x;
    // 前缀之前出现的次数
    const c = cnt.get(mask) ?? 0;
    // 更新ans
    ans += c;

    // 更新mask计数
    cnt.set(mask, c + 1);
  }

  return ans;
};
