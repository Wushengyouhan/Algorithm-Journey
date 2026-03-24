/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  // 1. 初始化 DP 数组：n x n，全填 0
  // dp[i][j] 表示区间 s[i...j] 的最长回文子序列长度
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));

  // 2. Base Case: 任何单个字符都是长度为 1 的回文
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // 3. 填表 (区间 DP 铁律：i 从下往上，j 从左往右)
  for (let i = n - 1; i >= 0; i--) {
    // j 必须在 i 的右边，所以从 i + 1 开始
    for (let j = i + 1; j < n; j++) {
      // 4. 状态转移
      if (s[i] === s[j]) {
        // 首尾相等：把里面那段回文包起来，长度 +2
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        // 首尾不等：看是丢掉左边长，还是丢掉右边长
        // 取 下方(丢掉左边) 和 左方(丢掉右边) 的最大值
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  // 5. 整个字符串的最长回文长度，就是区间 [0, n-1] 的值
  return dp[0][n - 1];
};
