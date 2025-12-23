/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let unmatchedLeft = 0; // 记录当前没被匹配的 '[' 数量

  for (const char of s) {
    if (char === '[') {
      unmatchedLeft++;
    } else {
      // 遇到 ']'
      if (unmatchedLeft > 0) {
        // 如果手里有 '['，就配对消除一个
        unmatchedLeft--;
      }
      // 如果 unmatchedLeft === 0，说明这个 ']' 是多余的
      // 我们不需要管它，因为最后的 unmatchedLeft 数量
      // 就代表了这种形如 "]]][[[" 的结构中 '[' 的个数
    }
  }

  // 公式：(k + 1) / 2
  return Math.floor((unmatchedLeft + 1) / 2);
};
