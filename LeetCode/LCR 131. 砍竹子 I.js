/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function (bamboo_len) {
  // dp 数组大小为 len + 1，方便下标直接对应长度
  // dp[i] 表示长度为 i 的竹子，砍成至少两段后的最大乘积
  const dp = new Array(bamboo_len + 1).fill(0);

  // 初始状态：长度为 2 的竹子只能砍成 1 和 1，乘积为 1
  dp[2] = 1;

  // 外层循环：逐步计算每种长度的竹子的最优解，直到目标长度
  for (let i = 3; i <= bamboo_len; i++) {
    // 内层循环：尝试砍第一刀，切下长度 j
    // 剪枝优化：因为 1 * (i-1) 和 (i-1) * 1 是一样的，所以 j 只需要遍历到 i/2 即可
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      // 核心状态转移：
      // dp[i]：历史循环记录下来的最大值 (打擂台)
      // j * (i - j)：切了第一刀后，剩下部分不切了
      // j * dp[i - j]：切了第一刀后，剩下部分继续切 (查表获取历史最优解)
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[bamboo_len];
};
