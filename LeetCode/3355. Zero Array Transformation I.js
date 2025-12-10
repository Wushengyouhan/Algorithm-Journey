/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  const n = nums.length;

  // 1. 初始化差分数组
  // 开 n + 1 大小，省去 r+1 越界的判断
  const diff = new Array(n + 1).fill(0);

  // 2. 遍历 queries 填充差分数组
  for (const [l, r] of queries) {
    diff[l]++;
    diff[r + 1]--;
  }

  // 3. 扫描前缀和，同时进行校验
  let capacity = 0; // 当前位置能提供的最大消减能力
  for (let i = 0; i < n; i++) {
    capacity += diff[i];

    // 如果能提供的消减次数 < 需要消减的值
    if (capacity < nums[i]) {
      return false;
    }
  }

  return true;
};
