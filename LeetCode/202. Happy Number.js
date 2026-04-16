/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 1. 辅助函数：专门用来求一个数各位数字平方和
  const getNext = num => {
    let sum = 0;
    // 不断取个位，然后把个位砍掉
    while (num > 0) {
      let digit = num % 10; // 拿到最后一位 (如 19 的 9)
      sum += digit * digit; // 加上平方
      num = Math.floor(num / 10); // 去掉最后一位 (19 变 1)
    }
    return sum;
  };

  // 2. 主逻辑：用 Set 记录走过的路，防止死循环
  const seen = new Set();

  // 只要 n 还没变成 1，并且这个 n 之前没出现过 (说明还没掉进死循环)
  while (n !== 1 && !seen.has(n)) {
    // 先把当前的 n 记在小本本上
    seen.add(n);
    // 然后算出下一个 n
    n = getNext(n);
  }

  // 循环结束时，如果 n 变成了 1，就是快乐数；
  // 如果是因为 seen.has(n) 退出循环的，那它就是掉进死胡同了，不是快乐数。
  return n === 1;
};
