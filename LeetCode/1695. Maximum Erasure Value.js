/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let cnt = new Map();
  let left = 0;
  let ans = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    const c = nums[right];
    cnt.set(c, (cnt.get(c) ?? 0) + 1);
    sum += nums[right];

    while (cnt.get(c) > 1) {
      const out = nums[left];
      cnt.set(out, cnt.get(out) - 1);
      sum -= out;
      left++;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};