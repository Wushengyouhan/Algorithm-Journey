/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let l = 0;
  // 有边界最大可能的值
  let r = n * Math.min(a, b);
  let ans = 0;
  let lcmValue = lcm(a, b);

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    // 去掉重复算的值
    if (Math.floor(m / a) + Math.floor(m / b) - Math.floor(m / lcmValue) >= n) {
      // 达到了，缩小有边界
      ans = m;
      r = m - 1;
    } else {
      //没达到，增加左边界
      l = m + 1;
    }
  }
  return ans % 1000000007;
};

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}
