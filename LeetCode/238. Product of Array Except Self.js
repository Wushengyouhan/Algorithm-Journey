/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  // 1. 初始化两个数组
  const L = new Array(n);
  const R = new Array(n);
  const answer = new Array(n);

  // 2. 填充左积数组 L
  L[0] = 1;
  for (let i = 1; i < n; i++) {
    // 当前左积 = 上一个位置的左积 * 上一个位置的数
    L[i] = L[i - 1] * nums[i - 1];
  }

  // 3. 填充右积数组 R (从右往左)
  R[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    // 当前右积 = 下一个位置的右积 * 下一个位置的数
    R[i] = R[i + 1] * nums[i + 1];
  }

  // 4. 合并结果
  for (let i = 0; i < n; i++) {
    answer[i] = L[i] * R[i];
  }

  return answer;
};
