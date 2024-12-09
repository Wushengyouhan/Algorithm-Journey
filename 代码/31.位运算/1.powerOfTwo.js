/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //2的幂只有1个1
  //n & -n取最右侧的1
  return n > 0 && n === (n & -n);
};
