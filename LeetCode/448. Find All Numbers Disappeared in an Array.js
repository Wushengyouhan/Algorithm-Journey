/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = []; // 存放结果

  // 第一遍遍历：根据数字去标记对应的下标
  for (let i = 0; i < nums.length; i++) {
    // ⭐ 必须取绝对值！因为当前数字可能在之前的循环中已经被别人标记成负数了
    const num = Math.abs(nums[i]);

    // 计算该数字应该对应的下标 (数字 1 对应下标 0)
    const targetIndex = num - 1;

    // 如果该座位还没被标记过，就把它变成负数
    if (nums[targetIndex] > 0) {
      nums[targetIndex] = -nums[targetIndex];
    }
  }

  // 第二遍遍历：寻找没有被标记过的座位（即还是正数的元素）
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      // 下标 i 还是正数，说明数字 i + 1 从来没出现过
      res.push(i + 1);
    }
  }

  return res;
};
