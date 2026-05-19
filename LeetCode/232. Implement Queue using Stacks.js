var MyQueue = function () {
  this.inStack = []; // 输入栈，负责入队
  this.outStack = []; // 输出栈，负责出队
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * 核心逻辑写在 peek 里：保证 outStack 有元素
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 只有当 outStack 为空时，才把 inStack 的元素全部倒过来
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
  // 返回 outStack 的栈顶元素（数组的最后一个元素）
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 复用 peek 的逻辑，确保 outStack 里有元素可以直接 pop
  this.peek();
  return this.outStack.pop();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 两个栈都为空，队列才为空
  return this.inStack.length === 0 && this.outStack.length === 0;
};
