/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const idx = new Set();
  let ans = -1;
  for (let x of nums) {
    if (idx.has(-x)) {
      ans = Math.max(ans, Math.abs(x));
    }
    idx.add(x);
  }
  return ans;
};
