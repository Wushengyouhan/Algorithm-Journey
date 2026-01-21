const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const pq = new MinPriorityQueue({
    compare: (a, b) => {
      if (a.val !== b.val) {
        return a.val - b.val;
      }
      return a.index - b.index;
    },
  });

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue({ val: nums[i], index: i });
  }

  for (let i = 0; i < k; i++) {
    const item = pq.dequeue();
    item.val = item.val * multiplier;
    pq.enqueue(item);
    nums[item.index] = item.val;
  }

  return nums;
};
