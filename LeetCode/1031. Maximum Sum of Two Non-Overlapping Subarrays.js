/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  // 1. 计算前缀和。前i个元素的和。
  const s = Array(nums.length + 1).fill(0);
  for (let i = 1; i < nums.length + 1; i++) {
    s[i] = s[i - 1] + nums[i - 1];
  }

  return Math.max(f(s, firstLen, secondLen), f(s, secondLen, firstLen));

  // 最大值比较函数
  function f(s, firstLen, secondLen) {
    let maxSumA = 0;
    let res = 0;
    for (let i = firstLen + secondLen; i < s.length; i++) {
      maxSumA = Math.max(maxSumA, s[i - secondLen] - s[i - firstLen - secondLen]);
      res = Math.max(res, maxSumA + s[i] - s[i - secondLen]);
    }
    return res;
  }
};
