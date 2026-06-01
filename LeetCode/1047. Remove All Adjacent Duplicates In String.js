/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    // 如果栈不为空，且当前字符等于栈顶字符
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 发生消除，弹出栈顶
    } else {
      stack.push(char); // 否则入栈
    }
  }

  // 栈里面现在存放的是字符数组，需要合并成字符串
  return stack.join('');
};
