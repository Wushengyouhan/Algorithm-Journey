/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const stack = [];
  // 记录小于当前nums[j] 的 nums[k]的最大值
  let med = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < med) {
      return true;
    }

    // 将比nums[i]小的都出栈，得到小于nums[i]的最大的那个数
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      med = stack.pop();
    }

    // 此时nums[i]变成新的nums[j]
    stack.push(nums[i]);
  }

  return false;
};
