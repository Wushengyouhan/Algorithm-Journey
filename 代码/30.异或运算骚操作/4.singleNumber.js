/**
 * @param {number[]} nums
 * @return {number}
 */

// 数组中1种数出现了奇数次，其他的数都出现了偶数次
// 返回出现了奇数次的数
var singleNumber = function (nums) {
  let ans = 0;
  for (let item of nums) {
    ans ^= item;
  }
  return ans;
};
