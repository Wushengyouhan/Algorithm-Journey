/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const path = [];

  // ⭐ 起手式 1：凡是有重复元素求不重复解的题，必先排序！
  nums.sort((a, b) => a - b);

  // ⭐ 起手式 2：全排列必带全局 used 数组（防自己被重复抓取）
  const used = new Array(nums.length).fill(false);

  const backtrack = function () {
    // 1. 终止条件
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    // 2. 单层循环逻辑：每次都从 0 开始找
    for (let i = 0; i < nums.length; i++) {
      // 🛡️ 护盾 1 (树枝去重)：如果自己已经在队伍里了，不能再抓自己
      if (used[i] === true) {
        continue;
      }

      // 🛡️ 护盾 2 (树层去重)：遇到双胞胎兄弟，且他刚退役（used为false）
      // 说明你在横向遍历，直接跳过当前克隆人！
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }

      // 登记入伍
      used[i] = true;
      path.push(nums[i]);

      // 递归往下钻
      backtrack();

      // 退伍 (回溯)
      path.pop();
      used[i] = false;
    }
  };

  backtrack();
  return res;
};
