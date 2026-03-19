/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // 1. 初始化 DP 数组：(m+1) x (n+1)，全填 0
  // dp[i][j] 表示 text1 的前 i 个字符和 text2 的前 j 个字符的最长公共子序列长度
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 2. 遍历两层数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 3. 状态转移
      // 注意：字符串的索引是从 0 开始的，所以要减 1
      if (text1[i - 1] === text2[j - 1]) {
        // 字符相等：在去掉这两个字符之前的最长长度基础上 + 1 (即左上角的值)
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 字符不等：分别去掉 text1 当前字符 或 text2 当前字符，看哪种情况匹配得更长
        // 即取 上方(dp[i-1][j]) 和 左方(dp[i][j-1]) 的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 4. 返回右下角的最终结果
  return dp[m][n];
};
