var MinStack = function () {
  this.stack = []; // 主栈
  this.minStack = []; // 辅助栈，存非严格递减的最小值
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  // 关键逻辑：
  // 如果辅助栈为空，或者 新值 <= 当前最小值，则入辅助栈
  // 注意这里必须是 <=，处理重复最小值的情况
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 弹出主栈元素
  const val = this.stack.pop();

  // 关键逻辑：
  // 如果弹出的值 等于 当前最小值，说明这个最小值被移除了
  // 辅助栈也要同步弹出，让"第二小"的值成为新的"最小"
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 最小栈的栈顶永远是当前的全局最小值
  return this.minStack[this.minStack.length - 1];
};
