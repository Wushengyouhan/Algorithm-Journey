/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 1. 初始化两个栈
  let numStack = []; // 存倍数
  let strStack = []; // 存“上一层”的字符串

  let num = 0; // 当前正在累积的数字
  let result = ''; // 当前正在构建的字符串

  for (const char of s) {
    // --- 情况 A: 遇到数字 ---
    if (!isNaN(char)) {
      // 处理多位数情况 (例如 "12")
      num = num * 10 + Number(char);
    }

    // --- 情况 B: 遇到左括号 [ ---
    else if (char === '[') {
      // 关键：进阶前先“存档”
      strStack.push(result); // 把进门前的字符串压栈
      numStack.push(num); // 把进门前的倍数压栈

      // 清空状态，为新的一层做准备
      result = '';
      num = 0;
    }

    // --- 情况 C: 遇到右括号 ] ---
    else if (char === ']') {
      // 关键：结束当前层，进行“结算”
      const repeatTimes = numStack.pop(); // 获取倍数
      const prevStr = strStack.pop(); // 获取上一层的字符串(存档)

      // 拼接公式：上一层内容 + (当前层内容 * 倍数)
      result = prevStr + result.repeat(repeatTimes);
    }

    // --- 情况 D: 遇到普通字母 ---
    else {
      result += char;
    }
  }

  return result;
};
