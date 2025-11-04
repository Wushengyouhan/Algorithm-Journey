/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  const map = new Map();
  const pairs = [];

  for (const n of nums) {
    const c = map.get(target - n);
    if (c) {
      map.set(target - n, c - 1);
      pairs.push([target - n, n]);
    } else {
      map.set(n, (map.get(n) ?? 0) + 1);
    }
  }
  return pairs;
};
