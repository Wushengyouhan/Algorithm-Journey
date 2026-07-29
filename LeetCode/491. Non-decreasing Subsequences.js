/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [];
  const path = [];

  const backtrack = function (startIndex) {
    // 1. 收集结果：题目要求子序列至少有两个元素
    if (path.length >= 2) {
      res.push([...path]);
      // 注意：这里不能 return！因为 [4, 6] 收集完，还要继续去收集 [4, 6, 7]
    }

    // ⭐ 极其关键：这是本层特有的哈希表（局部变量），专门用来记录本层用过哪些数字
    // 每次进入新的一层，都会重新开一个干干净净的 set
    const used = new Set();

    // 2. 单层循环逻辑
    for (let i = startIndex; i < nums.length; i++) {
      // ✂️ 剪枝拦截 (两重判断)：
      // 1. 如果当前选的数字比 path 里的最后一个数字还小（不是递增的），作废！
      // 2. 如果当前选的数字，在这一层已经用过了（同层重复），作废！
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || used.has(nums[i])) {
        continue;
      }

      // 登记：把当前数字记录到本层的 set 里，防止这层后面的兄弟跟它长一样
      used.add(nums[i]);

      // 做选择
      path.push(nums[i]);

      // 递归往下钻
      backtrack(i + 1);

      // 撤销选择 (回溯)
      path.pop();

      // 🚨 惊天大坑：这里的 used 千万千万不能被 pop(delete)！
      // 因为 used 是专门记录这【整一层】的历史记录的。不管你回不回溯，
      // 只要这个数字在这一层出过场，它就永远被登记在案了，后面再遇到一模一样的就直接封杀。
    }
  };

  backtrack(0);
  return res;
};
