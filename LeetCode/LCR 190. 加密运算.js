/**
 * @param {number} dataA
 * @param {number} dataB
 * @return {number}
 */
var encryptionCalculate = function (dataA, dataB) {
  // 当没有进位时（dataB 变成 0），加法过程结束
  while (dataB !== 0) {
    // 1. 计算进位值 (只有 1&1 才会产生进位，并且进位要左移一位)
    // 注意：按位与的优先级低于赋值，所以可以不用加括号，但为了代码清晰，建议加括号
    let carry = (dataA & dataB) << 1;

    // 2. 计算无进位和 (相当于把不需要进位的地方加起来)
    dataA = dataA ^ dataB;

    // 3. 把进位值赋值给 dataB，进入下一轮循环，尝试把进位值加到 dataA 上去
    dataB = carry;
  }

  // 当没有进位时，dataA 里存的就是彻底加完的结果
  return dataA;
};
