/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const k = new Set(nums).size;
  const cnt = new Map();
  let ans = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    const c = nums[right];
    cnt.set(c, (cnt.get(c) || 0) + 1);

    // 2. 出队到刚好不满足
    while (cnt.size === k) {
      const out = nums[left];
      if (cnt.get(out) === 1) {
        cnt.delete(out);
      } else {
        cnt.set(out, cnt.get(out) - 1);
      }
      left++;
    }

    // 3.更新
    ans += left;
  }
  return ans;
};
