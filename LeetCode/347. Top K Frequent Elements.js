const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 1. 统计频率
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 2. 初始化小顶堆
  // 【LeetCode 实测写法】：直接传入回调函数，告诉堆按"频率"排序
  const pq = new MinPriorityQueue(num => map.get(num));

  // 3. 遍历所有不重复的数字
  for (const num of map.keys()) {
    // 入队 (因为定义了回调，这里只传 num 即可，堆会自动去 map 里查频率)
    pq.enqueue(num);

    // 4. 维护堆的大小为 k
    if (pq.size() > k) {
      // 踢出频率最小的那个
      pq.dequeue();
    }
  }

  // 5. 收集结果
  const res = [];
  while (pq.size() > 0) {
    // 【LeetCode 实测写法】：直接出队获取数值 (无需 .element)
    res.push(pq.dequeue());
  }

  return res;
};
