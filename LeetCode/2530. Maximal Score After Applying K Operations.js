const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const pq = new MaxPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
  }

  let sum = 0;
  while (k > 0) {
    let curentMax = pq.dequeue();
    sum += curentMax;
    pq.enqueue(Math.ceil(curentMax / 3));
    k--;
  }

  return sum;
};
