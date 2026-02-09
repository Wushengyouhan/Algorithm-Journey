/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0; // 跳跃次数
  let curEnd = 0; // 当前这一步的最远边界（有效期）
  let maxReach = 0; // 下一步能探索到的最远位置

  // 关键点：只遍历到 nums.length - 2
  // 因为如果我们到了倒数第二个位置，就已经可以决定是否需要最后一步跳到终点
  // 如果遍历到最后一个元素，恰好 i == curEnd，会错误地多加一次步数
  for (let i = 0; i < nums.length - 1; i++) {
    // 1. 贪心：不断刷新在当前范围内，下一跳能去的最远位置
    maxReach = Math.max(maxReach, i + nums[i]);

    // 2. 边界判断：如果走到了当前步数的尽头
    if (i === curEnd) {
      steps++; // 必须跳一步
      curEnd = maxReach; // 更新边界到刚才找到的最远位置

      // (可选剪枝) 如果已经覆盖终点，可以提前 break
      if (curEnd >= nums.length - 1) break;
    }
  }

  return steps;
};
