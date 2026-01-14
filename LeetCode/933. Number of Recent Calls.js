var RecentCounter = function () {
  // 初始化一个队列（在 JS 中用数组模拟）
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 1. 新请求入队
  this.queue.push(t);

  // 2. 检查队头元素是否过期
  // 范围是 [t - 3000, t]
  // 如果 队头元素 < t - 3000，说明它过期了，踢出去
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  // 3. 返回剩下的队列长度
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
