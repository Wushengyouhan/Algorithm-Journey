const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  const pq = new MaxPriorityQueue();
  for (let p of piles) {
    pq.enqueue(p);
  }

  while (k > 0) {
    let curMax = pq.dequeue();
    let left = curMax - Math.floor(curMax / 2);
    pq.enqueue(left);
    k--;
  }

  let ans = 0;
  while (!pq.isEmpty()) {
    ans += pq.dequeue();
  }
  return ans;
};
