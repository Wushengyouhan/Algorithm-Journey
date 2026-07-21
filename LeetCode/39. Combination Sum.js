/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const path = [];
  let sum = 0;

  // ⭐ 优化细节 1：提前把数组从小到大排序，为后面的极致剪枝做准备
  candidates.sort((a, b) => a - b);

  const backtrack = function (startIndex) {
    // 1. 终止条件
    if (sum === target) {
      res.push([...path]);
      return;
    }

    // 如果 sum 已经大于 target，这里其实不用写了，因为下面 for 循环里已经剪枝了
    // if (sum > target) return;

    // 2. 单层循环逻辑
    for (let i = startIndex; i < candidates.length; i++) {
      // ⭐ 优化细节 2 (极致剪枝)：
      // 因为数组已经排好序了，如果当前 sum 加上当前数字已经爆了，
      // 那么后面的数字比当前数字还要大，加起来肯定更爆！直接 break 结束整个循环！
      if (sum + candidates[i] > target) {
        break;
      }

      // 做选择
      path.push(candidates[i]);
      sum += candidates[i];

      // 🚨 核心区别：递归时传入的是 i，而不是 i + 1！
      // 意味着：我这一层选了 2，下一层我还可以从 2 开始选！
      backtrack(i);

      // 撤销选择 (回溯)
      path.pop();
      sum -= candidates[i];
    }
  };

  // 从下标 0 开始搜索
  backtrack(0);

  return res;
};
