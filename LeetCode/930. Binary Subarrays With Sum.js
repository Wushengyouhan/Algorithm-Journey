/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  return help(nums, goal) - help(nums, goal + 1);
};

// 求和 >= k 的子数组数量
function help(nums, k) {
  let sum = 0;
  let left = 0;
  let ans = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    sum += nums[right];

    // 2. 出到刚好不满足的情况
    while (sum >= k && left <= right) {
      sum -= nums[left];
      left++;
    }

    // 3.更新
    ans += left;
  }

  return ans;
}

help([0, 0, 0, 0, 0], 0);
