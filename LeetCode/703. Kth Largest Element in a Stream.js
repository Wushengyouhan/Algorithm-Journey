const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  // 初始化小顶堆
  // 注意：默认构造函数会将数字包装成 { priority, element } 对象
  this.pq = new MinPriorityQueue();

  for (const num of nums) {
    this.add(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // 1. 入堆
  this.pq.enqueue(val);

  // 2. 维持堆大小为 K
  if (this.pq.size() > this.k) {
    this.pq.dequeue();
  }

  // 3. 返回堆顶元素
  return this.pq.front();
};
