/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;

  // 1. JS 的 sort 默认按字符排序，处理数字必须传入比较函数！
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    // 2. 剪枝优化：如果当前数字已经大于 0，后面无论怎么加都大于 0
    if (nums[i] > 0) break;

    // 3. 对第一个数去重（回头看，如果和上一个一样，说明搜过了）
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];

      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);

        // 4. 对左右指针去重：跳过所有连续相同的数字
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;

        // 跨过重复值后，指针还要再移动一位指向新的不同值
        L++;
        R--;
      } else if (sum < 0) {
        L++; // 和太小，说明负数太重了，左指针右移
      } else {
        R--; // 和太大，说明正数太重了，右指针左移
      }
    }
  }

  return res;
};
