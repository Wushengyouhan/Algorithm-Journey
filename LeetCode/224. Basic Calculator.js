/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let res = 0;
  let num = 0;
  let sign = 1; // 1: +, -1: -

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === ' ') {
      continue;
    }

    if (char >= '0' && char <= '9') {
      // 处理多位数: "123" -> 1*10+2 -> 12*10+3
      num = num * 10 + parseInt(char);
    } else if (char === '+' || char === '-') {
      // 遇到符号，结算【前面】那个数字
      res += sign * num;
      // 更新符号给【下一个】数字用
      sign = char === '+' ? 1 : -1;
      // 数字已入账，重置
      num = 0;
    } else if (char === '(') {
      // 进括号：保存当前结果和括号前的符号
      stack.push(res);
      stack.push(sign);
      // 重置状态，开始计算括号内部
      res = 0;
      sign = 1;
    } else if (char === ')') {
      // 出括号：先结算括号内最后一个数
      res += sign * num;
      num = 0;

      // 恢复现场
      // 1. 弹出括号前的符号 ( stack.pop() ) 并乘给当前结果
      res *= stack.pop();
      // 2. 弹出进入括号前的旧结果 ( stack.pop() ) 并加回去
      res += stack.pop();
    }
  }

  // 【坑点】：循环结束后，最后一个数字还在 num 里没加进去
  // 必须补一刀
  res += sign * num;

  return res;
};
