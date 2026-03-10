/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;

  // 边界情况特判 (非常重要)
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  if (n === 2) return Math.max(nums[0], nums[1]);

  // 辅助函数：计算一段连续(无环)房屋的最大收益
  // 使用滚动数组优化，空间 O(1)
  const robRange = (start, end) => {
    let prev2 = 0; // 对应 dp[i-2]
    let prev1 = 0; // 对应 dp[i-1]

    for (let i = start; i <= end; i++) {
      // 当前的最大收益：不偷当前 vs 偷当前
      let current = Math.max(prev1, prev2 + nums[i]);

      // 状态向前滚动
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  };

  // 方案 1：不偷最后一间，考虑区间 [0, n-2]
  const res1 = robRange(0, n - 2);

  // 方案 2：不偷第一间，考虑区间 [1, n-1]
  const res2 = robRange(1, n - 1);

  // 返回两种方案中的较大值
  return Math.max(res1, res2);
};
