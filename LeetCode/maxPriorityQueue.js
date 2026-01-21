// 引入
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// 构造
const pq = new MaxPriorityQueue();

// 入队
pq.enqueue(5);

pq.enqueue(3);

pq.enqueue(4);

// 查看队首
console.log(pq.front());

// 出队
console.log(pq.dequeue());
