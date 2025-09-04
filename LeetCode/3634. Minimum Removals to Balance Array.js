/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a,b) => a - b)
    let ans = 0;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
      while (nums[left] * k < nums[right]) {
        left++
      }
      ans = Math.max(ans, right -left + 1)
    }

    return nums.length - ans
};