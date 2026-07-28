/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const path = [];

  // ⭐ 起手式：遇到去重题，第一时间对数组进行排序！
  nums.sort((a, b) => a - b);

  const backtrack = function (startIndex) {
    // 1. 无脑收集：无论是什么状态，一进门直接装进结果集
    res.push([...path]);

    // 2. 单层循环逻辑
    for (let i = startIndex; i < nums.length; i++) {
      // ⭐ 核心去重：同一树层内，如果当前元素和前一个兄弟元素相同，直接跳过！
      // 必须是 i > startIndex，确保是在“向右走”时拦截，而不是“向下钻”时拦截。
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }

      // 3. 做选择
      path.push(nums[i]);

      // 4. 递归往下钻 (传 i + 1)
      backtrack(i + 1);

      // 5. 撤销选择 (回溯)
      path.pop();
    }
  };

  // 从下标 0 开始找
  backtrack(0);

  return res;
};
