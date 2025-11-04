/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  // mn 维护之前的全局最小值
  let mn = Infinity;
  // mx 维护之前的全局最大值
  let mx = -Infinity;

  let ans = 0;
  for (const a of arrays) {
    ans = Math.max(ans, a[a.length - 1] - mn, mx - a[0]);
    mn = Math.min(mn, a[0]);
    mx = Math.max(mx, a[a.length - 1]);
  }

  return ans;
};
