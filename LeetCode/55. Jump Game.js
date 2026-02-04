/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0; // 能量槽：记录最远能到达的索引
  const target = nums.length - 1; // 终点索引

  for (let i = 0; i < nums.length; i++) {
    // 1. 核心检查：如果当前格子在最远射程之外，说明断路了
    if (i > maxReach) {
      return false;
    }

    // 2. 贪心更新：保留"历史最远"和"当前能跳最远"的较大者
    maxReach = Math.max(maxReach, i + nums[i]);

    // 3. 剪枝：如果已经覆盖到终点了，直接返回 true
    if (maxReach >= target) {
      return true;
    }
  }

  return true;
};
