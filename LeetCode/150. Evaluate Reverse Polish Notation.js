/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const t of tokens) {
    switch (t) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        // 注意：减法和除法要注意出栈顺序，后出的减去先出的
        // 写法技巧：利用变量暂存先弹出的值
        const sub = stack.pop();
        stack.push(stack.pop() - sub);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        const div = stack.pop();
        // 核心优化：使用位运算 (a / b) | 0 代替 Math.trunc(a / b)
        // 这在 JS 中效率更高，且能自动处理向零取整（例如 -1.5 -> -1）
        stack.push((stack.pop() / div) | 0);
        break;
      default:
        // 优化：使用 Number() 或 +t 比 parseInt() 稍微快一点且更语义化
        stack.push(Number(t));
        break;
    }
  }
  return stack[0];
};
