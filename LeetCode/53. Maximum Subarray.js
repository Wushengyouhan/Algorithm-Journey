/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // pre 记录以“前一个元素”结尾的最大和
  let pre = 0;
  // maxAns 记录全局最大和，初始化为第一个元素（防止数组全为负数时返回0）
  let maxAns = nums[0];

  for (const x of nums) {
    // 核心决策：
    // 1. 延续前面的子数组：pre + x
    // 2. 另起炉灶（前面的和是负的，不要了）：x
    pre = Math.max(pre + x, x);

    // 更新全局最大值
    maxAns = Math.max(maxAns, pre);
  }

  return maxAns;
};
