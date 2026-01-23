const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const pq = new MinPriorityQueue();

  for (let n of nums) {
    pq.enqueue(n);
  }

  let cnt = 0;

  while (pq.front() < k) {
    const x = pq.dequeue();
    const y = pq.dequeue();
    pq.enqueue(2 * x + y);
    cnt++;
  }

  return cnt;
};
