/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let ans = 0;
  let cnt0 = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    cnt0 += nums[right] === 0 ? 1 : 0;

    // 多于一个0，前面得出队
    while (cnt0 > 1) {
      cnt0 -= nums[left] === 0 ? 1 : 0;
      left++;
    }

    ans = Math.max(ans, right - left);
  }

  return ans;
};