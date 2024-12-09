// 双链表节点
class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.keyNodeMap = new Map();
    this.head = null;
    this.tail = null;
  }

  // 把节点移动到链表末尾
  moveTotail(node) {
    if (this.tail === node) {
      return;
    }

    if (this.head === node) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    node.prev = this.tail;
    node.next = null;

    this.tail.next = node;
    this.tail = node;
  }

  // 移除头节点
  removeHead() {
    if (!this.head) {
      return null;
    }

    const oldhead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldhead.next;
      oldhead.next = null;
      this.head.prev = null;
    }

    return oldhead;
  }

  // 添加新节点
  addNode(newNode) {
    if (!newNode) {
      return;
    }

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  // 读后更新节点位置
  get(key) {
    if (this.keyNodeMap.has(key)) {
      const node = this.keyNodeMap.get(key);
      this.moveTotail(node);
      return node.value;
    }

    return -1;
  }

  // 添加值
  put(key, value) {
    if (this.keyNodeMap.has(key)) {
      const node = this.keyNodeMap.get(key);
      node.value = value;
      this.moveTotail(node);
    } else {
      if (this.keyNodeMap.size === this.capacity) {
        const removeNode = this.removeHead();
        this.keyNodeMap.delete(removeNode.key);
      }
      const newNode = new Node(key, value);
      this.keyNodeMap.set(key, newNode);
      this.addNode(newNode);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
