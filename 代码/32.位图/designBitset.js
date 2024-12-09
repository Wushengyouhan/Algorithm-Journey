/**
 * @param {number} size
 */
var Bitset = function (size) {
  this.set = new Array(Math.ceil(size / 32)).fill(0);
  this.size = size;
  //在操作的时候同时更新下面状态
  this.zeroes = size;
  this.ones = 0;
  this.reverse = false;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  const index = Math.floor(idx / 32);
  const bit = idx % 32;

  if (!this.reverse) {
    // 位图所有位的状态，维持原始含义
    // 0 : 不存在
    // 1 : 存在
    if ((this.set[index] & (1 << bit)) === 0) {
      this.zeroes--;
      this.ones++;
      //把该位变成1
      this.set[index] |= 1 << bit;
    }
  } else {
    // 位图所有位的状态，翻转了
    // 0 : 存在
    // 1 : 不存在
    if ((this.set[index] & (1 << bit)) !== 0) {
      this.zeroes--;
      this.ones++;
      //把改位变成0
      this.set[index] ^= 1 << bit;
    }
  }
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  const index = Math.floor(idx / 32);
  const bit = idx % 32;

  if (!this.reverse) {
    // 位图所有位的状态，维持原始含义
    // 0 : 不存在
    // 1 : 存在
    if ((this.set[index] & (1 << bit)) !== 0) {
      this.zeroes++;
      this.ones--;
      this.set[index] ^= 1 << bit;
    }
  } else {
    // 位图所有位的状态，翻转了
    // 0 : 存在
    // 1 : 不存在
    if ((this.set[index] & (1 << bit)) === 0) {
      this.zeroes++;
      this.ones--;
      this.set[index] |= 1 << bit;
    }
  }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  this.reverse = !this.reverse;
  //交换0和1的个数
  [this.zeroes, this.ones] = [this.ones, this.zeroes];
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  return this.ones === this.size;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  return this.ones > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  let buildStr = [];
  //i是当前处理的位数
  //k是当前数字的索引
  //很爽的for循环,好好品
  for (let i = 0, k = 0, number, status; i < this.size; k++) {
    number = this.set[k];
    //这里 i < this.size 的条件也要，不然会补很多0，超出size
    for (let j = 0; j < 32 && i < this.size; j++, i++) {
      status = (number >>> j) & 1;
      //反转状态下，状态也要反
      status ^= this.reverse ? 1 : 0;
      buildStr.push(status);
    }
  }
  return buildStr.join("");
};

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
