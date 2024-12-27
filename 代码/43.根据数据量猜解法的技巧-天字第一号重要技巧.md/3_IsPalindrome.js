/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let offset = 1;
  // 得到和x位数一样的offset
  // 121
  // 100
  while (Math.floor(x / offset) >= 10) {
    offset *= 10;
  }

  // 首尾判断
  while (x !== 0) {
    if (Math.floor(x / offset) !== x % 10) {
      return false;
    }

    // 掐头去尾
    // 121
    // 2
    x = Math.floor((x % offset) / 10);
    offset = Math.floor(offset / 100);
  }

  return true;
};
