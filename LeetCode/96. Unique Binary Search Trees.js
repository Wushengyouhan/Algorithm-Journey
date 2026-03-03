/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 1. 初始化 DP 数组
  // dp[i] 表示 i 个节点能组成多少种 BST
  const dp = new Array(n + 1).fill(0);

  // 2. Base Case (非常重要)
  dp[0] = 1; // 空树算一种
  dp[1] = 1; // 一个节点算一种

  // 3. 外层循环：计算 dp[2] ... dp[n]
  for (let i = 2; i <= n; i++) {
    // 4. 内层循环：尝试用 1...i 每个数做根节点
    // j 表示根节点是第几个数
    for (let j = 1; j <= i; j++) {
      // 左子树节点数 = j - 1
      // 右子树节点数 = i - j
      // 累加所有情况
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
