/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let s = 0;
  let mx = 0;
  let mn = 0;
  for (let x of nums) {
    // 计算新的前缀和
    s += x;
    mx = Math.max(mx, s);
    mn = Math.min(mn, s);
  }
  return mx - mn;
};
