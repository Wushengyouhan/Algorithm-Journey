/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let maxS = 0, sum = 0;
  let cnt = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 1. 进
    sum += nums[i];
    cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);

    if (i < k - 1) {
      continue;
    }

    // 2. 更新
    if (cnt.size === k) {
      maxS = Math.max(maxS, sum);
    }

    // 3. 出
    const out = nums[i - k + 1];
    sum -= out;

    if (cnt.get(out) > 1) {
      cnt.set(out, cnt.get(out) - 1);
    } else {
      cnt.delete(out);
    }
  }

  return maxS;
};