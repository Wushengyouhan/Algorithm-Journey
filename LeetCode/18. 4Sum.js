/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  const len = nums.length;
  if (len < 4) return res;

  // 1. 必须排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; i++) {
    // 第一层去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    /* --- 优化剪枝 (大幅提升速度) --- */
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
    /* ---------------------------- */

    for (let j = i + 1; j < len - 2; j++) {
      // 第二层去重
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      /* --- 优化剪枝 --- */
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;
      /* ---------------- */

      let L = j + 1;
      let R = len - 1;

      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
          // 找到后去重
          while (L < R && nums[L] === nums[L + 1]) L++;
          while (L < R && nums[R] === nums[R - 1]) R--;
          L++;
          R--;
        } else if (sum < target) {
          L++;
        } else {
          R--;
        }
      }
    }
  }
  return res;
};
