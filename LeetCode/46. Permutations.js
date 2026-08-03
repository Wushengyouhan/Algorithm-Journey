/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const path = [];

  // ⭐ 全局 used 数组：记录哪个元素已经被挑进 path 里了
  // 长度和 nums 一样，初始全是 false（都没被用过）
  const used = new Array(nums.length).fill(false);

  const backtrack = function () {
    // 1. 终止条件：当 path 里的数字个数等于原数组个数时，说明所有人都排好队了
    if (path.length === nums.length) {
      res.push([...path]); // 收集全排列快照
      return;
    }

    // 2. 单层循环逻辑
    // 🚨 惊天大反转：全排列问题，每一次都要从 0 开始重新挑人！没有 startIndex！
    for (let i = 0; i < nums.length; i++) {
      // ✂️ 核心拦截器：如果这个人在上面的楼层已经被挑走了，跳过！
      if (used[i] === true) {
        continue;
      }

      // 登记造册，把人带走
      used[i] = true;
      path.push(nums[i]);

      // 递归往下钻（去挑下一个人）
      backtrack();

      // 撤销选择 (回溯)：把人放回原来的卡池里，把名字从名单上划掉
      path.pop();
      used[i] = false;
    }
  };

  // 启动递归，全排列不需要传 startIndex
  backtrack();

  return res;
};
