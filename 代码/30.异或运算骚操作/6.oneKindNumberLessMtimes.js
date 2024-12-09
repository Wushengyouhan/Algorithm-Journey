/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return find(nums, 3);
};

// 更通用的方法
// 已知数组中只有1种数出现次数少于m次，其他数都出现了m次
// 返回出现次数小于m次的那种数
function find(arr, m) {
  let cnts = new Array(32).fill(0);
  //统计每一位上有多少个1
  // cnts[0] : 0位上有多少个1
  // cnts[i] : i位上有多少个1
  // cnts[31] : 31位上有多少个1
  for (let i = 0; i < 32; i++) {
    for (const num of arr) {
      cnts[i] += (num >> i) & 1;
    }
  }
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if (cnts[i] % m !== 0) {
      //除不尽就把ans的那位置为1
      ans |= 1 << i;
    }
  }
  return ans;
}
