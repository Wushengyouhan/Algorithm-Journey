/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  // 找到x的最大位
  function maxDigit(x) {
    if (x === 0) return 0;
    let d = 0;
    while (x > 0) {
      d = Math.max(d, x % 10);
      x = Math.floor(x / 10);
    }
    return d;
  }

  const maxVal = Array(10).fill(-Infinity);

  let ans = -1;
  for (let n of nums) {
    // 取改数字最大位
    const d = maxDigit(n);
    // 更细答案
    ans = Math.max(ans, maxVal[d] + n);
    // 更新最大位数组
    maxVal[d] = Math.max(maxVal[d], n);
  }
  return ans;
};
