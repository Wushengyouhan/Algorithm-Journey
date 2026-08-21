/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;

  // subLen 代表基础子串的长度。
  // 子串最长不会超过总长度的一半，所以上限是 Math.floor(n / 2)
  for (let subLen = 1; subLen <= Math.floor(n / 2); subLen++) {
    // 剪枝优化：只有总长度能被 subLen 整除，才有可能是由它重复构成的
    if (n % subLen === 0) {
      // 截取潜在的基础子串
      const subStr = s.slice(0, subLen);

      // 计算这个子串需要重复多少次才能达到原字符串的长度
      const times = n / subLen;

      // 利用 JS 原生的 repeat 方法进行模拟拼接
      if (subStr.repeat(times) === s) {
        return true; // 拼成功了，确实是复读机
      }
    }
  }

  // 所有可能的长度都试过了，都不行，那就不是
  return false;
};
