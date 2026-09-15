/**
 * @param {number} cnt
 * @return {number[]}
 */
var countNumbers = function (cnt) {
  const res = [];
  // 计算上限，比如 cnt = 2，上限就是 10^2 - 1 = 99
  // 在 JS 中推荐使用 ** 运算符，等价于 Math.pow(10, cnt)
  const max = 10 ** cnt - 1;

  // 直接循环塞入数组
  for (let i = 1; i <= max; i++) {
    res.push(i);
  }

  return res;
};
