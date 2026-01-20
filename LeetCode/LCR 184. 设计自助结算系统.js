class Checkout {
  constructor() {
    this.queue = []; // 存储真实数据
    this.maxQueue = []; // 辅助单调队列（递减）
  }

  get_max() {
    if (!this.maxQueue.length) return -1;
    return this.maxQueue[0];
  }

  add(value) {
    this.queue.push(value);

    // 核心：维护单调性
    // 只有严格小于 value 的才弹出。
    // 如果等于 value，需要保留，因为可能同时存在两个相同的最大值。
    while (this.maxQueue.length && this.maxQueue[this.maxQueue.length - 1] < value) {
      this.maxQueue.pop();
    }
    this.maxQueue.push(value);
  }

  remove() {
    if (!this.queue.length) return -1;

    const val = this.queue.shift();

    // 核心：同步移除
    // 如果移除的元素正是当前最大值，maxQueue 也要移除队首
    if (val === this.maxQueue[0]) {
      this.maxQueue.shift();
    }

    return val;
  }
}
