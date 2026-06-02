/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const queue = []; // 存储元素的下标

  for (let i = 0; i < nums.length; i++) {
    // 1. 清理队尾：如果当前元素大于等于队尾下标对应的元素，把队尾踢掉
    // 保证队列是一个严格递减的结构
    while (queue.length > 0 && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    // 2. 将当前元素的下标入队
    queue.push(i);

    // 3. 清理队头：如果队头下标已经不在滑动窗口内了，把它移除
    // 窗口的左边界是 i - k + 1，如果队头下标 < 这个值，说明过期了
    if (queue[0] <= i - k) {
      queue.shift();
    }

    // 4. 记录结果：当遍历的元素数量达到了窗口大小 k 时，开始收集答案
    // 因为队列是递减的，所以队头元素永远是当前窗口的最大值
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }

  return res;
};
