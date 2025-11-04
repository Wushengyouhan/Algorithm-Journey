/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  // 用map来记录前面的每个值的个数
  const map = new Map();
  let ans = 0;

  for (const n of nums) {
    const c = map.get(k - n);
    if (c) {
      map.set(k - n, c - 1);
      ans++;
    } else {
      map.set(n, (map.get(n) ?? 0) + 1);
    }
  }

  return ans;
};
