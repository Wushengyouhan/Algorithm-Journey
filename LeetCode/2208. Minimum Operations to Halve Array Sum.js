const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  let total = 0;
  const pq = new MaxPriorityQueue();
  for (let num of nums) {
    pq.enqueue(num);
    total += num;
  }

  let sum = 0;
  let cnt = 0;

  while (sum < total / 2) {
    let cur = pq.dequeue();
    sum += cur / 2;
    cnt++;
    pq.enqueue(cur / 2);
  }

  return cnt;
};
