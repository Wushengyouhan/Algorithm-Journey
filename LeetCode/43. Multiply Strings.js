/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let n = num1.length,
    m = num2.length;
  let res = Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let mul = (num1[i] - 0) * (num2[j] - 0);
      // 乘积在 res 对应的索引位置
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] = res[p1] + Math.floor(sum / 10);
    }
  }

  // 结果前缀可能存的 0（未使用的位)
  let index = res.findIndex((digit) => digit !== 0);

  // 如果没有有效数字，则返回 "0"
  return index === -1 ? "0" : res.slice(index).join("");
};