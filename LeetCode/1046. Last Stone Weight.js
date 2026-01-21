// 引入(leetcode不需要)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // 1. 初始化大顶堆
  // LeetCode 内置库，无需 import
  const pq = new MaxPriorityQueue();

  // 2. 全部入堆
  for (const stone of stones) {
    pq.enqueue(stone);
  }

  // 3. 模拟碰撞：只要还有 2 块以上就继续
  while (pq.size() > 1) {
    // 直接取出数值 (无需 .element)
    const y = pq.dequeue(); // 最重的
    const x = pq.dequeue(); // 第二重的

    // 如果没完全粉碎，剩下的渣渣放回去
    if (x !== y) {
      pq.enqueue(y - x);
    }
  }

  // 4. 返回结果
  // 如果空了返回 0，否则返回剩下的那块
  return pq.isEmpty() ? 0 : pq.dequeue();
};
