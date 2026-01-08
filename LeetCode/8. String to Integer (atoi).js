/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 1. 定义 32 位整数的边界
  const MAX_INT = 2147483647; // 2^31 - 1
  const MIN_INT = -2147483648; // -2^31

  let i = 0;
  const n = s.length;

  // 2. 丢弃前导空格
  while (i < n && s[i] === ' ') {
    i++;
  }

  // 边界检查：防止字符串全是空格
  if (i === n) return 0;

  // 3. 检查符号
  let sign = 1;
  if (s[i] === '-') {
    sign = -1;
    i++;
  } else if (s[i] === '+') {
    i++;
  }

  // 4. 读取数字 (Compact Loop)
  let res = 0;
  // 循环条件：索引不越界 且 字符在 '0'-'9' 之间
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    // 技巧：利用 JS 隐式转换，s[i] - '0' 会自动转为数字
    res = res * 10 + (s[i] - '0');
    i++;
  }

  // 5. 赋予符号
  res = res * sign;

  // 6. 最终截断 (Clamping)
  if (res < MIN_INT) return MIN_INT;
  if (res > MAX_INT) return MAX_INT;

  return res;
};
