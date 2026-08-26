/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  let i = n - 2;

  // 1. 从右往左寻找第一个“下降点” i
  // 注意必须是 nums[i] >= nums[i+1]，遇到相等的也要跳过，去找真正比右边小的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 如果 i >= 0，说明数组不是纯降序的，我们找到了需要交换的点
  if (i >= 0) {
    let j = n - 1;
    // 2. 从右往左寻找第一个比 nums[i] 大的接班人 j
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    // 交换 i 和 j
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 3. 将 i 之后的后缀全部翻转（使其变为升序，达到最小状态）
  // 注意：如果上面 i 变成了 -1（说明整个数组就是降序的，比如 [3, 2, 1]）
  // 此时 left = -1 + 1 = 0，正好会把整个数组翻转回 [1, 2, 3]！逻辑天然闭环。
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
