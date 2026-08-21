/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 创建一个长度为 n + 1 的数组 res，全填入 0
  // res[0] 自然就是 0，作为推导的基础
  const res = new Array(n + 1).fill(0);

  // 从 1 开始往后推导
  for (let i = 1; i <= n; i++) {
    // 核心魔法：右移一位的值（前置状态） + 最低位的值（如果是奇数就是 1，偶数就是 0）
    res[i] = res[i >> 1] + (i & 1);
  }

  return res;
};
