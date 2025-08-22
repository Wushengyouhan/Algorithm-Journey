/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    result *= nums[i] > 0 ? 1 : -1;
  }
  return result;
};
