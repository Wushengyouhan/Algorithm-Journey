const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var SmallestInfiniteSet = function () {
  // 维护连续整数序列的起始点
  // 代表 [current, infinity] 都在集合里
  this.current = 1;

  // 小顶堆：存放被 addBack 回来的、比 current 小的数字
  this.pq = new MinPriorityQueue();

  // 哈希集合：辅助堆进行去重 (addBack 时防止重复添加)
  this.set = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  // 1. 优先检查堆（回收站）
  // 如果堆不为空，说明有比 current 更小的“回收数”
  if (!this.pq.isEmpty()) {
    const val = this.pq.dequeue(); // 弹出最小值
    this.set.delete(val); // 记得同步移除 Set
    return val;
  }

  // 2. 如果堆为空，使用连续序列
  const val = this.current;
  this.current++; // 指针后移
  return val;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  // 情况 A: num 还在连续序列里 (还没被 pop 过)，不需要加
  if (num >= this.current) {
    return;
  }

  // 情况 B: num 已经在回收站里了，不需要重复加
  if (this.set.has(num)) {
    return;
  }

  // 情况 C: 这是一个新的、比 current 小的回收数
  this.pq.enqueue(num);
  this.set.add(num);
};
