/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 两个单调队列
  const maxQueue = []; // 头部最大，单调递减
  const minQueue = []; // 头部最小，单调递增

  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < nums.length) {
    const curr = nums[right];

    // 1. 维护 maxQueue (新元素入队前，把比它小的尾部元素都踢掉)
    // 注意：使用严格小于 <，保留相等的元素，防止重复值被误删
    while (maxQueue.length && maxQueue[maxQueue.length - 1] < curr) {
      maxQueue.pop();
    }
    maxQueue.push(curr);

    // 2. 维护 minQueue (新元素入队前，把比它大的尾部元素都踢掉)
    while (minQueue.length && minQueue[minQueue.length - 1] > curr) {
      minQueue.pop();
    }
    minQueue.push(curr);

    // 3. 检查窗口合法性，不合法则收缩
    while (maxQueue.length && minQueue.length && maxQueue[0] - minQueue[0] > limit) {
      const leftVal = nums[left];

      // 关键：如果滑出的元素正好是最大值，maxQueue 也要出队
      if (maxQueue[0] === leftVal) {
        maxQueue.shift();
      }
      // 关键：如果滑出的元素正好是最小值，minQueue 也要出队
      if (minQueue[0] === leftVal) {
        minQueue.shift();
      }

      left++;
    }

    // 4. 更新最大长度
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};
