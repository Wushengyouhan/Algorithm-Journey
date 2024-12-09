class FreqStack {
  constructor() {
    // 出现的最大次数
    this.topTimes = 0;
    // 每层节点
    this.cntValues = new Map();
    // 每一个数出现了几次
    this.valueTimes = new Map();
  }

  push(val) {
    // 更新频次map  {a : 3}
    const newTimes = (this.valueTimes.get(val) || 0) + 1;
    this.valueTimes.set(val, newTimes);

    // 检查层数map中是否包含这个频次
    if (!this.cntValues.has(newTimes)) {
      this.cntValues.set(newTimes, []);
    }

    // 将该值加入到该频次的数组中 {3: [d, a]}
    this.cntValues.get(newTimes).push(val);

    // 更新最大值
    this.topTimes = Math.max(this.topTimes, newTimes);
  }

  pop() {
    // 获取当前最大次数的值列表
    const topTimesValues = this.cntValues.get(this.topTimes);
    // 弹出最后加入的
    const ans = topTimesValues.pop();

    // 如果当前最大次数的值列表为空，移除该层并降低 topTimes
    if (topTimesValues.length === 0) {
      this.cntValues.delete(this.topTimes);
      this.topTimes--;
    }

    // 更新 valueTimes
    const times = this.valueTimes.get(ans);
    if (times === 1) {
      this.valueTimes.delete(ans);
    } else {
      this.valueTimes.set(ans, times - 1);
    }

    return ans;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
