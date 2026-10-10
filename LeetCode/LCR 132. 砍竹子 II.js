/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (bamboo_len) {
  // 基础边界特判（因为题目要求“至少砍一刀”）
  if (bamboo_len === 2) return 1; // 只能砍成 1 + 1，乘积 1
  if (bamboo_len === 3) return 2; // 只能砍成 1 + 2，乘积 2

  // 模数，10的9次方加7
  const MOD = 1000000007;

  // 用 res 来记录累乘的结果，初始为 1
  let res = 1;

  // 当竹子长度大于 4 时，疯狂地切下长度为 3 的段！
  while (bamboo_len > 4) {
    // 每次切下 3，乘积就乘 3，并且立刻取模防爆
    res = (res * 3) % MOD;
    // 总长度缩减 3
    bamboo_len -= 3;
  }

  // 循环结束时，bamboo_len 只可能等于 2, 3, 或 4
  // 把最后剩下的这段长度直接乘上去，再取一次模，就是最终答案
  return (res * bamboo_len) % MOD;
};
