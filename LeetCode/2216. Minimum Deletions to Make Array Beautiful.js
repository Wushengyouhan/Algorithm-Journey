/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
  const n = nums.length;
  let ans = 0;
  let i = 0;
  while (i < n - 1) {
    if (nums[i] === nums[i + 1]) {
      ans += 1;
      i++;
    } else {
      i += 2;
    }
  }

  if ((n - ans) % 2 !== 0) {
    ans += 1;
  }
  return ans;
};
