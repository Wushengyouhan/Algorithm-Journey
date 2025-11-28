/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  // 1. 排序
  nums.sort((a, b) => a - b);

  // 2.计算前缀和
  const s = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    s[i + 1] = s[i] + nums[i];
  }

  // 3.完成每个查询
  return queries.map(q => upperBound(s, q) - 1);

  // 二分查找
  // 严格大于 nums[i] = target时left要右移
  function upperBound(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
};
