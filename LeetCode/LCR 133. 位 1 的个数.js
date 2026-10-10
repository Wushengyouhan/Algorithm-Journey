/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0; // 记录 1 的个数

  // 当数字中还有 1 时，继续循环
  while (n !== 0) {
    // 核心魔法：消除最右边的一个 1
    n = n & (n - 1);
    // 消除了一个 1，计数器加 1
    count++;
  }

  return count;
};
