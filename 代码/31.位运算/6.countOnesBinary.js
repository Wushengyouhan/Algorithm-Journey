/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return cntOnes(x ^ y);
};

function cntOnes(n) {
  //0101
  n = (n & 0x55555555) + ((n >>> 1) & 0x55555555);
  //0011
  n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
  //00001111
  n = (n & 0x0f0f0f0f) + ((n >>> 4) & 0x0f0f0f0f);
  //0000000011111111
  n = (n & 0x00ff00ff) + ((n >>> 8) & 0x00ff00ff);
  //00000000000000001111111111111111
  n = (n & 0x0000ffff) + ((n >>> 16) & 0x0000ffff);

  return n;
}
