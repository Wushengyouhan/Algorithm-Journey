/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];

    if ((top === 'A' && char === 'B') || (top === 'C' && char === 'D')) {
      stack.pop(); // 命中规则，消消乐
    } else {
      stack.push(char); // 无法消除，入栈
    }
  }

  return stack.length;
};
