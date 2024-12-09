class MedianFinder {
  constructor() {
    // 大根堆，存储较小的一半
    this.maxHeap = new PriorityQueue({ compare: (a, b) => b - a });
    // 小根堆，存储较大的一半
    this.minHeap = new PriorityQueue({ compare: (a, b) => a - b });
  }

  addNum(num) {
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.front()) {
      this.maxHeap.enqueue(num);
    } else {
      this.minHeap.enqueue(num);
    }

    this.balance();
  }

  findMedian() {
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.front() + this.minHeap.front()) / 2;
    } else {
      return this.maxHeap.size() > this.minHeap.size()
        ? this.maxHeap.front()
        : this.minHeap.front();
    }
  }

  balance() {
    // 如果差值大小等于2时需要调整平衡
    if (Math.abs(this.maxHeap.size() - this.minHeap.size()) === 2) {
      if (this.maxHeap.size() > this.minHeap.size()) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
      } else {
        this.maxHeap.enqueue(this.minHeap.dequeue());
      }
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
