/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const m = s.length;
  const n = t.length;

  // 剪枝：如果 s 比 t 短，绝对不可能包含 t
  if (m < n) return 0;

  // 1. 初始化二维 DP 数组，全填 0
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 2. Base Case: t 为空串时，任何 s 都有 1 种方式匹配（全删）
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  // 第一行保持 0 (除 dp[0][0])

  // 3. 填表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 注意字符串索引比 dp 数组索引小 1
      if (s[i - 1] === t[j - 1]) {
        // 核心转移方程：字符匹配时 = 用当前字符 + 不用当前字符
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        // 字符不匹配：只能不用当前 s 的字符
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};
