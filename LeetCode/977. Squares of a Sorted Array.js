/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  // 1. 初始化结果数组，和原数组一样长
  const res = new Array(n);

  // 2. 双指针指向原数组的两端
  let left = 0;
  let right = n - 1;

  // 3. k 指针指向新数组的末尾（因为我们先挑出来的是最大的数）
  let k = n - 1;

  // 4. 开始相向双指针遍历
  // 注意必须包含 left === right，因为最后相遇的那个最小的数也要填进去
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    // 比较两端平方值的大小
    if (leftSquare > rightSquare) {
      res[k] = leftSquare;
      left++; // 左边处理过了，指针右移
    } else {
      res[k] = rightSquare;
      right--; // 右边处理过了，指针左移
    }

    // 每次填完一个数，新数组指针往前挪一位
    k--;
  }

  return res;
};
