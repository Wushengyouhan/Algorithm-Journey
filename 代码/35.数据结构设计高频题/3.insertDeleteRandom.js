class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
    // 注意这里的length就是新插入值的索引
    this.map.set(val, this.arr.length);
    // 值保存到数组里
    this.arr.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }
    // 待删除值索引
    let valIndex = this.map.get(val);
    // 数组末尾的值
    let endValue = this.arr[this.arr.length - 1];
    // 末尾值移到待删除值的位置
    this.arr[valIndex] = endValue;
    // 更新末尾值的索引
    this.map.set(endValue, valIndex);
    // 删除该值
    this.map.delete(val);
    this.arr.pop();

    return true;
  }

  getRandom() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
