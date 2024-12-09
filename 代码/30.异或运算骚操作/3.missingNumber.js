/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //求0-n的异或
  let eorAll = 0;
  //求所有元素的异或
  let eorHas = 0;

  for (let i = 0; i < nums.length; i++) {
    eorAll ^= i;
    eorHas ^= nums[i];
  }

  eorAll ^= nums.length;
  return eorAll ^ eorHas;
};
