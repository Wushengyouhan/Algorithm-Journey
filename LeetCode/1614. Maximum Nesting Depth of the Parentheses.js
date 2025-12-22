/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let level = 0;
  let ans = 0;
  for (const c of s) {
    if (c === '(') {
      level++;
      ans = Math.max(ans, level);
    } else if (c === ')') {
      level--;
    }
  }
  return ans;
};
