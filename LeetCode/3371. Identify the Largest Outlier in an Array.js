/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function (nums) {
  let ans = -Infinity;
  // 统计每个数字的个数
  const map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  // 求和
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  // 遍历异常值
  for (const x of nums) {
    map.set(x, map.get(x) - 1);
    // 和存在,并且能找到
    if ((total - x) % 2 === 0 && map.get((total - x) / 2) > 0) {
      ans = Math.max(ans, x);
    }

    map.set(x, map.get(x) + 1);
  }

  return ans;
};
