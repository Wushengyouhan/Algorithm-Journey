/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  //1010和0101
  n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
  //1100和0011
  n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
  //11110000和00001111
  n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
  //1111111100000000和0000000011111111
  n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
  //16位交换
  n = (n >>> 16) | (n << 16);

  //转成无符号
  return n >>> 0;
};
