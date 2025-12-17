/**
 * @param {string} s
 * @return {string}
 */
var resultingString = function (s) {
  const stack = [];

  for (const char of s) {
    // 1. 如果栈空，直接进，不废话
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }

    const top = stack[stack.length - 1];

    // 2. 提取变量，只计算一次 diff
    const diff = Math.abs(char.charCodeAt(0) - top.charCodeAt(0));

    // 3. 判断逻辑
    if (diff === 1 || diff === 25) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
