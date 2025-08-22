/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let incSign = true;
  let decSign = true;

  for (let i = 1; i < nums.length && (incSign || decSign); i++) {
    incSign = incSign && nums[i] >= nums[i - 1];
    decSign = decSign && nums[i] <= nums[i - 1];
  }

  return incSign || decSign;
};
