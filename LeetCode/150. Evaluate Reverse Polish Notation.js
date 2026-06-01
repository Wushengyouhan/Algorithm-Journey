/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    // 如果是运算符
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // 坑1：顺序千万别搞反！先弹出的是右操作数，后弹出的是左操作数
      const right = stack.pop();
      const left = stack.pop();

      let res = 0;
      switch (token) {
        case '+':
          res = left + right;
          break;
        case '-':
          res = left - right;
          break;
        case '*':
          res = left * right;
          break;
        case '/':
          // 坑2：除法必须向零截断
          res = Math.trunc(left / right);
          break;
      }
      // 把计算结果重新压入栈
      stack.push(res);
    } else {
      // 坑3：如果是数字字符串，必须先转成 Number 再压栈
      stack.push(Number(token));
    }
  }

  // 最后栈里剩下的唯一元素就是答案
  return stack[0];
};
