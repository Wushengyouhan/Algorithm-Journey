const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function (nums, k) {
  const MOD = 10 ** 9 + 7;
  const pq = new MinPriorityQueue();

  for (let num of nums) {
    pq.enqueue(num);
  }
  while (k > 0) {
    let cur = pq.dequeue();
    pq.enqueue(cur + 1);
    k--;
  }

  let ans = 1;

  while (pq.size() > 0) {
    ans = (ans * pq.dequeue()) % MOD;
  }

  return ans;
};
