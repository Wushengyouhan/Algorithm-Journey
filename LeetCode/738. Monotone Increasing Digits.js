/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  // 1. 转字符串数组，方便按位操作
  const s = n.toString().split('').map(Number);
  const len = s.length;

  // flag 标记从哪一位开始，后面必须全部变 9
  // 初始设为 len，表示默认不需要变
  let flag = len;

  // 2. 从后往前遍历
  for (let i = len - 1; i > 0; i--) {
    // 如果前一位 > 当前位，违反单调递增
    if (s[i - 1] > s[i]) {
      s[i - 1] -= 1; // 前一位借位减小
      flag = i; // 记录当前位为“变9起始点”
    }
  }

  // 3. 统一刷 9
  // 这一步必须在最后做，确保处理了所有的连锁反应
  for (let i = flag; i < len; i++) {
    s[i] = 9;
  }

  // 4. 转回数字 (parseInt 会自动处理开头的 0，如 099 -> 99)
  return parseInt(s.join(''));
};
