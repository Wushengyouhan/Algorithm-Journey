/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let ans = 0;
  const map = new Map();

  for (let n of nums) {
    const c = map.get(n) ?? 0;
    ans += c;
    map.set(n, c + 1);
  }
  return ans;
};
