/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 1. 初始化二维 DP 数组
  // dp[i][j] 表示 i个0 和 j个1 能组成的最大子集长度
  // 长度为 (m+1) x (n+1)
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 2. 遍历物品 (每一个字符串)
  for (const str of strs) {
    // 统计当前字符串的 cost (0的个数和1的个数)
    let zeroNum = 0;
    let oneNum = 0;
    for (const char of str) {
      if (char === '0') zeroNum++;
      else oneNum++;
    }

    // 3. 遍历背包容量 (0-1 背包必须倒序！)
    // i 控制 0 的容量，j 控制 1 的容量
    // 边界：容量必须装得下当前字符串，所以 >= zeroNum / oneNum
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        // 状态转移
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }

  return dp[m][n];
};
