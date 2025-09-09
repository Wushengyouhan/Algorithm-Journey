/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const n = nums.length;
  // 初始化ans大一些
  let ans = n + 1;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    // 1. 进
    sum += nums[right];

    // 出队条件：尽量缩短子数组
    while (sum - nums[left] >= target) {
      sum -= nums[left];
      left++;
    }

    // 2. 更新
    if (sum >= target) {
      ans = Math.min(ans, right - left + 1);
    }
  }
  return ans <= n ? ans : 0;
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
