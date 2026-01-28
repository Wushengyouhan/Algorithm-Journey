/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (queries, k) {
  const results = [];
  const maxHeap = new MaxPriorityQueue();

  for (const [x, y] of queries) {
    const dist = Math.abs(x) + Math.abs(y);

    maxHeap.enqueue(dist);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }

    if (maxHeap.size() < k) {
      results.push(-1);
    } else {
      // 直接返回堆顶数值
      results.push(maxHeap.front());
    }
  }

  return results;
};
