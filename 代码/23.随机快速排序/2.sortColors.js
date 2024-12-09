/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0
  //a是左边界0..a-1 是0
  let a = 0
  //b是右边界 b+1..num.length-1是 2
  let b = nums.length - 1
  //[a,b]是1
  
  while (i <= b) {
    if (nums[i] < 1) {
      [nums[i], nums[a]] = [nums[a], nums[i]]
      i++;
      a++
    } else if (nums[i] > 1) {
      [nums[i], nums[b]] = [nums[b], nums[i]]
      b--
    } else {
      i++
    }
  } 
  
  return nums
};