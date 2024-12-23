let where; // 全局变量，用于递归函数之间共享解析位置

function calculate(str) {
  where = 0; // 初始化全局变量，用于记录当前解析的位置
  return f(str.split(""), 0); // 将字符串拆成字符数组后从位置 0 开始解析
}

function f(s, i) {
  let cur = 0; // 当前处理的数字
  const numbers = []; // 保存所有的数字
  const ops = []; // 保存所有的运算符 (+, -, *, /)

  // 遍历表达式，直到遇到 ')' 或到达末尾
  while (i < s.length && s[i] !== ")") {
    if (s[i] >= "0" && s[i] <= "9") {
      // 当前字符是数字，逐位累积成完整数字
      // 累加后i++
      cur = cur * 10 + (s[i++] - "0");
    } else if (s[i] !== "(") {
      // 当前字符是运算符 (+, -, *, /)
      push(numbers, ops, cur, s[i++]); // 将当前数字和运算符存入栈，i++
      cur = 0; // 重置当前数字
    } else {
      // 当前字符是左括号 '('，递归解析括号内部
      cur = f(s, i + 1); // 从括号内部开始递归计算
      i = where + 1; // 更新位置为括号结束后的下一个字符
    }
  }

  // 遇到字符串结尾或者 ')'，将最后一个数字压入栈
  push(numbers, ops, cur, "+");
  where = i; // 更新全局变量，通知上层函数当前处理到的位置
  return compute(numbers, ops); // 计算当前表达式的最终结果
}

// 将当前数字和运算符加入栈，根据运算符优先级处理乘除运算
function push(numbers, ops, cur, op) {
  const n = numbers.length;
  if (n === 0 || ops[n - 1] === "+" || ops[n - 1] === "-") {
    // 如果栈为空，或者上一个运算符是加减运算，直接将当前数字和运算符压入栈
    numbers.push(cur);
    ops.push(op);
  } else {
    // 如果上一个运算符是乘法或除法，直接与栈顶数字计算并更新栈顶数字
    let topNumber = numbers[n - 1];
    let topOp = ops[n - 1];
    if (topOp === "*") {
      numbers[n - 1] = topNumber * cur;
    } else {
      numbers[n - 1] = Math.floor(topNumber / cur);
    }
    // 更新栈顶运算符为当前运算符
    ops[n - 1] = op;
  }
}
// 遍历栈，计算加减法的最终结果
// [2,3,4]
// [+,-,+]
// 2 + 3 - 4
function compute(numbers, ops) {
  let n = numbers.length;
  let ans = numbers[0];
  for (let i = 1; i < n; i++) {
    if (ops[i - 1] === "+") {
      ans += numbers[i];
    } else {
      ans -= numbers[i];
    }
  }
  return ans;
}
