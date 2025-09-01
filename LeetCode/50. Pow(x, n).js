/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let ans = 1;

  // 负数的情况
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n) {
    // 末位是1，把当前的x乘进来
    if (n % 2) {
      ans *= x;
    }
    // x翻倍
    x *= x;
    // 更新n
    n = Math.floor(n / 2);
  }

  return ans;
};