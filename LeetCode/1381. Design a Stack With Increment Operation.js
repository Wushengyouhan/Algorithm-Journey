/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []; // 存储实际数据
  this.add = new Array(maxSize).fill(0); // 存储增量数据 (差分思想)
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  // 只有未满时才推入
  if (this.stack.length < this.maxSize) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  // 栈为空返回 -1
  if (this.stack.length === 0) {
    return -1;
  }

  const idx = this.stack.length - 1; // 当前栈顶索引
  const val = this.stack.pop(); // 弹出原始值
  const inc = this.add[idx]; // 获取当前层累积的增量

  // 【核心逻辑】：如果下面还有元素，将增量“下传”给下一个元素
  if (idx > 0) {
    this.add[idx - 1] += inc;
  }

  // 清除当前层的增量，防止下次 push 进来新元素时受影响
  this.add[idx] = 0;

  // 返回 原始值 + 增量
  return val + inc;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  // 找到实际需要增加的最高位置（取 k 和 当前栈大小 的较小值）
  // 下标是 长度 - 1
  const idx = Math.min(k, this.stack.length) - 1;

  // 只需要更新最上面的那个位置即可，pop 的时候会往下传
  if (idx >= 0) {
    this.add[idx] += val;
  }
};
