// 双向链表的节点定义
class Bucket {
  constructor(key, count) {
    this.set = new Set();
    this.set.add(key);
    this.count = count;
    this.prev = null;
    this.next = null;
  }
}

class AllOne {
  constructor() {
    this.head = new Bucket("", 0);
    this.tail = new Bucket("", Infinity);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.keyToBucket = new Map();
  }

  inc(key) {
    // map不存在这个key
    if (!this.keyToBucket.has(key)) {
      // 如果下一个 Bucket 的计数为 1，直接加入
      if (this.head.next.count === 1) {
        this.head.next.set.add(key);
        this.keyToBucket.set(key, this.head.next);
      } else {
        // 不存在就新建一个count为1的桶
        const newBucket = new Bucket(key, 1);
        this.insert(this.head, newBucket);
        this.keyToBucket.set(key, newBucket);
      }
    } else {
      // 如果键已存在
      const bucket = this.keyToBucket.get(key);
      // 如果下一个 Bucket 的计数为当前计数 + 1，直接移动
      if (bucket.next.count === bucket.count + 1) {
        bucket.next.set.add(key);
        this.keyToBucket.set(key, bucket.next);
      } else {
        // 否则，新建一个计数为当前计数 + 1 的 Bucket
        const newBucket = new Bucket(key, bucket.count + 1);
        this.insert(bucket, newBucket);
        this.keyToBucket.set(key, newBucket);
      }
      // 从当前 Bucket 移除
      bucket.set.delete(key);
      // 如果 Bucket 为空，删除
      if (bucket.set.size === 0) {
        this.remove(bucket);
      }
    }
  }

  dec(key) {
    const bucket = this.keyToBucket.get(key);
    if (bucket.count === 1) {
      // 如果计数为 1，直接删除键
      this.keyToBucket.delete(key);
    } else {
      // 如果前一个 Bucket 的计数为当前计数 - 1，直接移动
      if (bucket.prev.count === bucket.count - 1) {
        bucket.prev.set.add(key);
        this.keyToBucket.set(key, bucket.prev);
      } else {
        const newBucket = new Bucket(key, bucket.count - 1);
        this.insert(bucket.prev, newBucket);
        this.keyToBucket.set(key, newBucket);
      }
    }
    // 从当前 Bucket 移除
    bucket.set.delete(key);
    // 如果 Bucket 为空，删除
    if (bucket.set.size === 0) {
      this.remove(bucket);
    }
  }

  getMaxKey() {
    return this.tail.prev.set.values().next().value;
  }

  getMinKey() {
    return this.head.next.set.values().next().value;
  }

  // 在指定 Bucket cur 后插入一个新 Bucket pos
  insert(cur, pos) {
    cur.next.prev = pos;
    pos.next = cur.next;
    cur.next = pos;
    pos.prev = cur;
  }

  // 删除当前的Bucket
  remove(cur) {
    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
