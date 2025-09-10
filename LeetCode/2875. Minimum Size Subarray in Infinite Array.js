/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function (nums, target) {
  const total = nums.reduce((acc, curr) => acc + curr, 0);
  const n = nums.length;
  const rem = target % total;

  let ans = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < 2 * n; right++) {
    // 1.进
    sum += nums[right % n];

    while (sum > rem) {
      sum -= nums[left % n];
      left++;
    }

    // 2. 更新
    if (sum === rem) {
      ans = Math.min(ans, right - left + 1);
    }
  }

  return ans === Infinity ? -1 : ans + Math.floor(target / total) * n;
};
