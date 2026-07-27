/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const path = [];

  const backtrack = function (startIndex) {
    // ⭐ 核心灵魂：不需要任何判断条件，一进门就“雁过拔毛”，把当前状态直接收集！
    // 因为空集 [] 也是子集，一上来传入 startIndex=0 时，[] 就被收进去了。
    res.push([...path]);

    // 这一步其实可以不写，因为下面的 for 循环进不去自然会结束。写上只是为了逻辑更清晰。
    if (startIndex >= nums.length) {
      return;
    }

    // 单层搜索逻辑
    for (let i = startIndex; i < nums.length; i++) {
      // 1. 做选择
      path.push(nums[i]);

      // 2. 递归往下钻（传入 i + 1，不走回头路）
      backtrack(i + 1);

      // 3. 撤销选择 (回溯)
      path.pop();
    }
  };

  // 从下标 0 开始搜
  backtrack(0);

  return res;
};
