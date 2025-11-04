/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  // 保存前面 vlaues[i] + i的最大值
  let mx = -Infinity;
  let ans = 0;
  for (let i = 0; i < values.length; i++) {
    ans = Math.max(ans, mx + values[i] - i);
    mx = Math.max(mx, values[i] + i);
  }
  return ans;
};
