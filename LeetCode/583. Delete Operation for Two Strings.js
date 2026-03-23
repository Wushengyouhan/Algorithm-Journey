/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // 1. 初始化 DP 数组：(m+1) x (n+1)
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // 2. 初始化边界
  // 第一列：word2 为空串，删除代价为 i
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  // 第一行：word1 为空串，删除代价为 j
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // 3. 遍历填表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 注意：字符串索引从 0 开始，要减 1
      if (word1[i - 1] === word2[j - 1]) {
        // 字符相同：不用删除，代价等同于它前面的部分
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 字符不同：必须删掉其中一个。
        // 删 word1当前字符 (上) vs 删 word2当前字符 (左)
        // 取代价最小的一个，并加上本次删除操作的 1 步
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  // 4. 返回右下角结果
  return dp[m][n];
};
