/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  const n = nums.length;
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  const result = Array(n);

  for (let i = 0; i < n; i++) {
    const x = nums[i];
    // 左边的元素个数是 i
    // 左边的贡献 = (i * x) - 左边元素之和
    const letfPart = x * i - leftSum;
    // 右边的元素个数是 n - 1 - i
    const rightPart = total - leftSum - x - x * (n - 1 - i);
    result[i] = letfPart + rightPart;
    // 更新 leftSum，供下一次迭代使用
    leftSum += x;
  }
  return result;
};
