var MyStack = function () {
  this.queue = []; // 仅使用一个队列
};

/**
 * 核心逻辑：入栈时将之前的元素全部轮转到新元素之后
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let size = this.queue.length; // 记录加新元素前的长度

  this.queue.push(x); // 新元素入队到末尾

  // 把新元素前面的所有老元素，从队头拿出来，塞到队尾去
  for (let i = 0; i < size; i++) {
    this.queue.push(this.queue.shift());
  }
};

/**
 * 移除并返回栈顶元素
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // 经过 push 的轮转，队头就是栈顶
  return this.queue.shift();
};

/**
 * 返回栈顶元素
 * @return {number}
 */
MyStack.prototype.top = function () {
  // 队头元素就是栈顶元素
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
