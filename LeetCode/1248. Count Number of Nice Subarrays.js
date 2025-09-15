/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  return atMostKOdds(nums, k) - atMostKOdds(nums, k - 1);
};

// 求至多有k个奇数的子数组个数
// 越短越合法
function atMostKOdds(nums, k) {
  let ans = 0;
  let cnt = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // 1. 进
    cnt += nums[right] % 2;

    // 2. 出队直到恰好满足
    while (cnt > k) {
      cnt -= nums[left] % 2;
      left++;
    }

    // 3. 更新
    ans += right - left + 1;
  }
  return ans;
}
