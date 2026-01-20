/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  // 两个单调队列
  const maxQueue = []; // 维护最大值 (递减)
  const minQueue = []; // 维护最小值 (递增)

  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];

    // 1. 维护 maxQueue: 踢出比当前 val 小的尾部元素
    while (maxQueue.length && maxQueue[maxQueue.length - 1] < val) {
      maxQueue.pop();
    }
    maxQueue.push(val);

    // 2. 维护 minQueue: 踢出比当前 val 大的尾部元素
    while (minQueue.length && minQueue[minQueue.length - 1] > val) {
      minQueue.pop();
    }
    minQueue.push(val);

    // 3. 收缩窗口：如果极差 > 2
    while (maxQueue.length && minQueue.length && maxQueue[0] - minQueue[0] > 2) {
      const leftVal = nums[left];
      // 同步移除队列头部
      if (maxQueue[0] === leftVal) maxQueue.shift();
      if (minQueue[0] === leftVal) minQueue.shift();

      left++;
    }

    // 4. 核心计数公式
    // 以当前 right 为结尾的合法子数组个数 = 当前窗口长度
    count += right - left + 1;
  }

  return count;
};
