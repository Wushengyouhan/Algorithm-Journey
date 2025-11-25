/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const n = nums.length;
  const s = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + nums[i];
  }

  const cnt = new Map();
  let ans = 0;
  // 注意遍历的是前缀和数组
  for (const sj of s) {
    // 更新
    ans += cnt.get(sj - k) ?? 0;
    // 加入
    cnt.set(sj, (cnt.get(sj) ?? 0) + 1);
  }
  return ans;
};
