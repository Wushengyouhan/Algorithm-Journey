var scoreOfParentheses = function (s) {
  const stack = [0]; // 1. 初始垫底

  for (const char of s) {
    if (char === '(') {
      stack.push(0); // 2. 遇到左括号，入栈 0 (开启新层)
    } else {
      // 3. 遇到右括号，结算
      const v = stack.pop(); // 取出当前层的分

      // 4. 计算当前结构的分数 (空则1，非空则翻倍)
      const score = Math.max(2 * v, 1);

      // 5. 累加给父层 (实现 A+B)
      stack[stack.length - 1] += score;
    }
  }

  return stack[0];
};
