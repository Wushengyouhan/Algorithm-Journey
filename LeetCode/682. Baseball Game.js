/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  // 定义一个栈来存储有效的分数
  const stack = [];

  for (const op of operations) {
    switch (op) {
      case 'C':
        // C (Cancel): 也就是"无效"，移除前一次的分数
        // 对应栈操作：弹出栈顶元素
        stack.pop();
        break;

      case 'D':
        // D (Double): 前一次得分的两倍
        // 获取栈顶元素并乘以 2，然后入栈
        // 注意：题目保证此时栈里肯定有元素
        stack.push(2 * stack[stack.length - 1]);
        break;

      case '+':
        // + (Sum): 前两次得分的总和
        // 获取栈顶（倒数第一）和倒数第二个元素
        const last = stack[stack.length - 1];
        const secondLast = stack[stack.length - 2];
        stack.push(last + secondLast);
        break;

      default:
        // 遇到数字字符串：直接转换成整数存入
        // parseInt 或者 Number() 或者 +op 都可以
        stack.push(parseInt(op));
    }
  }

  // 最后计算栈中所有分数的总和
  // reduce 是求和的利器
  return stack.reduce((acc, cur) => acc + cur, 0);
};
