/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0;

  const n = nums.length;
  // 1. 初始化 DP 数组，每个元素自成一个长度为 1 的序列
  const dp = new Array(n).fill(1);
  let maxLen = 1; // 记录全局最大长度

  // 2. 从第二个元素开始遍历
  for (let i = 1; i < n; i++) {
    // 3. 状态转移：如果递增，就接在前面的序列上
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
    // 如果不递增，dp[i] 保持初始值 1 不变 (自立门户)

    // 4. 更新全局最大值
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
