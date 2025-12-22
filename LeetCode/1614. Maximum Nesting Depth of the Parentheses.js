/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let currentDepth = 0; // 替代 level
  let maxDepth = 0; // 替代 ans

  for (const char of s) {
    if (char === '(') {
      currentDepth++;
      // 更新最大深度
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
      // 或者: maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === ')') {
      currentDepth--;
    }
  }
  return maxDepth;
};
