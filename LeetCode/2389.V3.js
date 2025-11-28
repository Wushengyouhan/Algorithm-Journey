/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);

  // s[i] 表示前 i 个元素的和
  // s[0] = 0
  // s[1] = nums[0]
  const s = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + nums[i];
  }

  // 这里如果是 s，返回的是 s 中的索引。
  // s 中的索引正好代表“子序列长度”。
  // 但 upperBound 返回的是“插入位置”（第一个大于 target 的位置），
  // 或者是“满足 <= target 的元素个数”。
  // 因为 s 里多了一个 0，所以个数多了 1，需要减掉。
  return queries.map(q => upperBound(q) - 1);

  function upperBound(target) {
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (s[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
};
