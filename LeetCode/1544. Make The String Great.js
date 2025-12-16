/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];

  // 细节优化：建议使用 const，语义更强
  for (const c of s) {
    const top = stack[stack.length - 1];

    // 优化核心：
    // 1. top 存在 (栈不为空)
    // 2. ASCII 码差值的绝对值是 32
    if (top && Math.abs(c.charCodeAt(0) - top.charCodeAt(0)) === 32) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};
