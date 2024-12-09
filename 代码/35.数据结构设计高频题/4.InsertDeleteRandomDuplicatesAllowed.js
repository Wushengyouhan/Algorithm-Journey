class RandomizedCollection {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val) {
    this.arr.push(val);
    if (!this.map.get(val)) {
      this.map.set(val, new Set());
    }

    this.map.get(val).add(this.arr.length - 1);
    // 判断添加后是不是只有一个
    return this.map.get(val).size === 1;
  }

  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }

    const valSet = this.map.get(val);
    // 获取值的任意一个索引
    const valAnyIndex = valSet.values().next().value;
    const endValue = this.arr[this.arr.length - 1]; // 获取数组末尾的值

    // 如果移除的是最后一个值，直接从集合中删除
    if (val === endValue) {
      valSet.delete(this.arr.length - 1);
    } else {
      valSet.delete(valAnyIndex); // 从移除值的集合中删除索引

      const endValSet = this.map.get(endValue);
      this.arr[valAnyIndex] = endValue; // 用末尾值覆盖移除的值
      endValSet.add(valAnyIndex); // 将末尾值的新索引添加到其集合中
      endValSet.delete(this.arr.length - 1); // 从末尾值的集合中删除旧索引
    }

    this.arr.pop(); // 移除数组末尾的值

    if (valSet.size === 0) {
      this.map.delete(val); // 如果集合为空，从Map中删除这个值
    }

    return true;
  }

  getRandom() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
