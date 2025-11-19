/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  // s长度为n
  const s = Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    // 相邻元素关系
    const r = nums[i - 1] % 2 === nums[i] % 2 ? 1 : 0;
    s[i] = s[i - 1] + r;
  }

  // 遍历查询数组
  return queries.map(([from, to]) => s[from] === s[to]);
};
