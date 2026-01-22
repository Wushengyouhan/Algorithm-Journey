const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  // 1. 初始化大顶堆 (LeetCode v6+ 环境)
  const pq = new MaxPriorityQueue();

  // 2. 将所有礼物堆入队
  for (const gift of gifts) {
    pq.enqueue(gift);
  }

  // 3. 执行 k 次操作
  while (k > 0) {
    // 取出最大的一堆 (v6 API 直接返回数值，无需 .element)
    const maxVal = pq.dequeue();

    // 算出剩下的数量：平方根，向下取整
    // 技巧：使用位运算 | 0 可以快速取整 (效果等同于 Math.floor)
    const remain = Math.sqrt(maxVal) | 0;

    // 放回堆中
    pq.enqueue(remain);

    k--;
  }

  // 4. 计算剩下所有礼物的总和
  let total = 0;
  while (!pq.isEmpty()) {
    total += pq.dequeue();
  }

  return total;
};
