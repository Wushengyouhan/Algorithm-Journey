/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 1. 初始化 DP 数组
  const dp = new Array(n + 1).fill(0);

  // 2. Base Case
  dp[2] = 1;

  // 3. 填表
  for (let i = 3; i <= n; i++) {
    // 剪枝：j 只需要遍历到 i/2
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(
        dp[i], // 之前循环找到的最大值
        j * (i - j), // 剩下部分不拆了
        j * dp[i - j] // 剩下部分继续拆
      );
    }
  }

  return dp[n];
};
