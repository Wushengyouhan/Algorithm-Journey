/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const cnt = new Map();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    const c = nums[right];
    cnt.set(c, (cnt.get(c) ?? 0) + 1);

    while (cnt.get(c) > k) {
      const out = nums[left];
      cnt.set(out, cnt.get(out) - 1);
      left++;
    }

    // 2. 更新
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
