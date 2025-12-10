/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = [];
  let idx = 0; // 用来指向 target 数组的当前目标

  // 只需要循环到 target 的最大值即可
  // 因为 target 是递增的，所以最后一个元素就是最大值
  const maxNum = target[target.length - 1];

  for (let i = 1; i <= maxNum; i++) {
    // 1. 传送带送来了 i，先拿进来
    res.push('Push');

    // 2. 检查 i 是不是 target[idx] 想要的
    if (target[idx] === i) {
      // 是想要的！
      // 那就保留在栈里，idx 指针后移，准备匹配下一个
      idx++;
    } else {
      // 不是想要的（是杂质）！
      // 刚拿进来，马上扔出去
      res.push('Pop');
    }
  }

  return res;
};
