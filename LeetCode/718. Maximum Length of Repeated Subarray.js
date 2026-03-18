/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  // 1. 初始化 DP 数组：(m+1) x (n+1)，全填 0
  // dp[i][j] 表示以 nums1[i-1] 和 nums2[j-1] 结尾的最长公共子数组的长度
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let maxLen = 0; // 记录全局最大长度

  // 2. 遍历两层数组
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 3. 状态转移
      // 如果两个数相等，说明在当前的子数组中接上了
      if (nums1[i - 1] === nums2[j - 1]) {
        // 长度等于它们前面那对数字的匹配长度 + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;

        // 时刻更新最大值
        maxLen = Math.max(maxLen, dp[i][j]);
      }
      // 如果不相等，dp[i][j] 默认就是 0，不需要额外操作
    }
  }

  return maxLen;
};
