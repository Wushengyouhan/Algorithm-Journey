/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
  let cnt = new Map();
  let maxS = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 1. 进
    sum += nums[i];
    cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);

    if (i < k - 1) {
      continue;
    }

    // 2. 更新
    if (cnt.size >= m) {
      maxS = Math.max(maxS, sum);
    }

    // 3. 出
    const out = nums[i - k + 1];
    sum -= out;
    const c = cnt.get(out);

    if (c > 1) {
      cnt.set(out, c - 1);
    } else {
      cnt.delete(out);
    }
  }

  return maxS;
};
