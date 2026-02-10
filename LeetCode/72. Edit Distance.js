/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // 1. 初始化二维 DP 数组
  // 使用 Array.from 生成独立的行，避免引用问题
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 2. 初始化边界 (Base Case)
  // 第一列：word1 变空串，需要删除 i 次
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  // 第一行：空串 变 word2，需要插入 j 次
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // 3. 填表 (从 1 开始，因为 0 已经填了)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 4. 状态转移
      // 注意：dp[i] 对应字符串下标 word1[i-1]
      if (word1[i - 1] === word2[j - 1]) {
        // 字符相同，不用操作
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 字符不同，取 (删除、插入、替换) 的最小值 + 1
        dp[i][j] =
          Math.min(
            dp[i - 1][j], // 删除
            dp[i][j - 1], // 插入
            dp[i - 1][j - 1] // 替换
          ) + 1;
      }
    }
  }

  return dp[m][n];
};
