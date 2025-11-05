/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let rev = 0;
  while (x) {
    const pop = x % 10;
    rev = rev * 10 + pop;
    if (rev < INT_MIN || rev > INT_MAX) return 0;
    x = Math.trunc(x / 10);
  }

  return rev;
};
