/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const max = Math.max(...nums);
  let cnt = 0;
  let ans = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    if (nums[right] === max) cnt++;

    // 2. 出队直到到刚好不满足的情况
    while (cnt >= k) {
      if (nums[left] === max) cnt--;
      left++;
    }

    // 3.更新
    ans += left;
  }

  return ans;
};
