/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 剪枝：如果长度是奇数，肯定无法配对，直接 false
  if (s.length % 2 !== 0) return false;

  // 建立一个映射表，方便查找右括号对应的左括号
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 如果 char 是 map 的 key，说明它是右括号
    if (map[char]) {
      // 取出栈顶元素（如果栈空，pop返回undefined）
      const top = stack.pop();

      // 检查取出的左括号是否和当前右括号匹配
      if (top !== map[char]) {
        return false;
      }
    } else {
      // 不是右括号，那肯定是左括号，直接入栈
      stack.push(char);
    }
  }

  // 最后必须栈空才算有效
  return stack.length === 0;
};
