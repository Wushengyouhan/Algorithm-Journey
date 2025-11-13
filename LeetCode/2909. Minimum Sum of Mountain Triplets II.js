/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const n = nums.length;
  // 计算后缀最小值
  const suf = Array(n).fill(-Infinity);
  suf[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = Math.min(suf[i + 1], nums[i]);
  }
  let ans = Infinity;
  let pre = nums[0];
  for (let j = 1; j < n - 1; j++) {
    if (nums[j] > pre && nums[j] > suf[j + 1]) {
      ans = Math.min(ans, nums[j] + pre + suf[j + 1]);
    }
    // 更新前缀最小值
    pre = Math.min(pre, nums[j]);
  }

  return ans === Infinity ? -1 : ans;
};
