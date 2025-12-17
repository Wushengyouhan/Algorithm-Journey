/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // 栈里存储的是 [字符, 连续出现的次数]
  // 例如：[['a', 2], ['b', 1]]
  const stack = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1][0] === char) {
      // 1. 如果当前字符和栈顶一样，累加计数
      stack[stack.length - 1][1]++;

      // 2. 如果计数达到 k，直接弹出，完成“消除”
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      // 3. 如果不一样（或是空栈），作为新字符入栈，计数为 1
      stack.push([char, 1]);
    }
  }

  // 4. 将栈中剩余的字符按次数拼接回来
  let res = '';
  for (const [char, count] of stack) {
    res += char.repeat(count);
  }

  return res;
};
