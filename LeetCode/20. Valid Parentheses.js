/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 坑1：奇数长度必然无法闭合，提前拦截，提升性能
  if (s.length % 2 !== 0) return false;

  const stack = [];

  // 技巧：右括号作为 Key，左括号作为 Value
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 如果当前字符在字典的键里（说明它是右括号）
    if (map[char]) {
      // 弹出栈顶元素。如果栈为空，pop() 会返回 undefined
      const topElement = stack.pop();

      // 判断弹出的左括号，是否和字典里规定的匹配
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // 是左括号，压入栈中
      stack.push(char);
    }
  }

  // 坑2：遍历完必须检查栈是否为空
  return stack.length === 0;
};
