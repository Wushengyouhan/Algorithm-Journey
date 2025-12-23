/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  // 使用栈来模拟括号的嵌套结构
  const stack = [];

  for (const c of s) {
    if (c === ')') {
      // 1. 遇到右括号，说明一个括号闭合了，需要处理这一层的内容
      const temp = [];

      // 2. 不断出栈，直到遇到对应的左括号 '('
      // 关键点：栈是"后进先出"的。
      // 例如栈中是 ['a', 'b', 'c']，pop 出来的顺序是 'c', 'b', 'a'。
      // 所以放入 temp 后，顺序自然就反转了，变成了 ['c', 'b', 'a']。
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        temp.push(stack.pop());
      }

      // 3. 弹出那个匹配的左括号 '('，将其丢弃（因为结果不包含括号）
      stack.pop();

      // 4. 将反转后的字符（temp）放回栈中
      // 这一步是为了让外层的括号（如果有）能继续处理这些字符
      // 也可以写成：stack.push(...temp);
      for (const t of temp) {
        stack.push(t);
      }
    } else {
      // 5. 遇到普通字符或左括号，直接入栈
      stack.push(c);
    }
  }

  // 6. 最后栈中剩下的就是处理完所有反转后的字符，拼接成字符串返回
  return stack.join('');
};
