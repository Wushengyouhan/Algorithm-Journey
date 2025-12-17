/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const char of s) {
    if (char === 'c') {
      // 遇到 c，必须能消除，否则直接挂
      const len = stack.length;
      if (len >= 2 && stack[len - 1] === 'b' && stack[len - 2] === 'a') {
        stack.pop(); // 弹出 b
        stack.pop(); // 弹出 a
      } else {
        return false; // 🚫 发现无法消除的 c，直接判死刑，提前结束
      }
    } else {
      // 遇到 a 或 b，只能先入栈等待
      stack.push(char);
    }
  }

  return stack.length === 0;
};
