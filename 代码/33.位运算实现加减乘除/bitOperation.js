const MIN = -Math.pow(2, 31); // 最小整数
const MAX = Math.pow(2, 31) - 1; // 最大整数
//通用除法，a,b可以是最小值
function divide(a, b) {
  //a = 最小 b = 最小
  if (a === MIN && b === MIN) {
    return 1;
  }

  //a != 最小 b != 最小
  if (a !== MIN && b !== MIN) {
    return div(a, b);
  }

  //此时 a != 最小 b = 最小
  if (b === MIN) {
    return 0;
  }

  //此时 a = 最小 b != 最小
  //b = -1
  if (b === neg(1)) {
    //题目要求返回最大
    return MAX;
  }
  //b != -1
  // if (b > 0) {
  //   return div(a + b, b) - 1;
  // } else {
  //   return div(a - b, b) + 1;
  // }

  //缩小被除数,防止溢出
  a = add(a, b > 0 ? b : neg(b));
  let ans = div(a, b);
  let offset = b > 0 ? neg(1) : 1;
  return add(ans, offset);
}

//加
function add(a, b) {
  let ans = a;
  while (b !== 0) {
    //无进位相加结果
    ans = a ^ b;
    //下一轮的b: 进位信息
    b = (a & b) << 1;
    //下一轮a
    a = ans;
  }
  return ans;
}

//减
function minus(a, b) {
  return add(a, neg(b));
}

//乘
function multiply(a, b) {
  let ans = 0;
  while (b !== 0) {
    if ((b & 1) !== 0) {
      ans += a;
    }

    a <<= 1;
    b >>>= 1;
  }

  return ans;
}

//除
//必须保证a和b都不是整数最小值，返回a除以b的结果
function div(a, b) {
  //将负数转成正数
  let x = a < 0 ? neg(a) : a;
  let y = b < 0 ? neg(b) : b;

  let ans = 0;
  //因为31位是符号位,最高有效位是30位
  for (let i = 30; i >= 0; i--) {
    //这样防止y左移溢出
    if (x >> i >= y) {
      ans |= 1 << i;
      x = minus(x, y << i);
    }
  }

  //如果两个符号不相同，则应该返回负数
  return (a < 0) ^ (b < 0) ? neg(ans) : ans;
}

//取相反数
function neg(n) {
  return add(~n, 1);
}
