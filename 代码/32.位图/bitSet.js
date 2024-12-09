//位图定义
class Bitset {
  constructor(n) {
    this.size = n;
    //数组里1个数可以存32个状态
    //这里是向上取整！！
    this.set = new Array(Math.ceil(n / 32)).fill(0);
  }

  add(num) {
    //找到在哪个数
    const index = Math.floor(num / 32);
    //找到位数
    const bit = num % 32;
    this.set[index] |= 1 << bit;
  }

  remove(num) {
    const index = Math.floor(num / 32);
    const bit = num % 32;
    this.set[index] &= ~(1 << bit);
  }

  reverse(num) {
    const index = Math.floor(num / 32);
    const bit = num % 32;
    this.set[index] ^= 1 << bit;
  }

  contains(num) {
    const index = Math.floor(num / 32);
    const bit = num % 32;
    return ((this.set[index] >>> bit) & 1) === 1;
  }
}

//对数器验证
function main() {
  //范围
  const n = 1000;
  //测试轮次
  const testTimes = 10000;
  console.log("测试开始");

  const bitSet = new Bitset(n);
  const set = new Set();

  console.log("调用阶段开始");
  for (let i = 0; i < testTimes; i++) {
    let decide = Math.random();
    let number = Math.floor(Math.random() * n);
    //等概率做三种操作
    if (decide < 0.333) {
      bitSet.add(number);
      set.add(number);
    } else if (decide < 0.666) {
      bitSet.remove(number);
      set.delete(number);
    } else {
      bitSet.reverse(number);
      if (set.has(number)) {
        set.delete(number);
      } else {
        set.add(number);
      }
    }
  }

  console.log("调用阶段结束");
  console.log("验证阶段开始");
  for (let i = 0; i < n; i++) {
    if (bitSet.contains(i) !== set.has(i)) {
      console.log("出错了!");
    }
  }

  console.log("验证阶段结束");
  console.log("测试结束");
}

main();
