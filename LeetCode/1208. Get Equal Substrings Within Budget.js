/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let ans = 0;
    let cost = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      // 1. 进
      cost += Math.abs(t.charCodeAt(right) - s.charCodeAt(right));

      while (cost > maxCost) {
        cost -= Math.abs(Math.abs(t.charCodeAt(left) - s.charCodeAt(left)))
        left++
      }

      // 2. 更新
      ans = Math.max(ans, right - left + 1)
    }

    return ans;
};