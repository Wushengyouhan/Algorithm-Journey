/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const path = [];
  let sum = 0;

  // ⭐ 极其重要：必须先排序！让相同的元素紧紧挨在一起，这是去重的前提！
  candidates.sort((a, b) => a - b);

  const backtrack = function (startIndex) {
    if (sum === target) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // ✂️ 剪枝 1：如果加上当前数字爆了，直接 break 结束循环
      if (sum + candidates[i] > target) {
        break;
      }

      // ✂️ 剪枝 2 (核心去重)：同一树层内，如果当前元素和前一个元素相同，直接跳过！
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      // 做选择
      path.push(candidates[i]);
      sum += candidates[i];

      // 递归：因为每个元素只能用一次，所以传 i + 1
      backtrack(i + 1);

      // 撤销选择 (回溯)
      path.pop();
      sum -= candidates[i];
    }
  };

  backtrack(0);
  return res;
};
