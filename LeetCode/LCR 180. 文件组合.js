/**
 * @param {number} target
 * @return {number[][]}
 */
var fileCombination = function (target) {
  const res = [];

  // 初始化窗口的左右边界
  let left = 1;
  let right = 2;
  let sum = 3; // 初始窗口内的和 (1 + 2)

  // 滑动窗口的极限：left 只需要遍历到 target 的一半即可
  // 因为连续数字至少有两个，比如 target=9，left 最大也就是 4，(4+5=9)
  const limit = Math.floor(target / 2);

  while (left <= limit) {
    if (sum === target) {
      // 1. 命中目标！生成当前连续数组并加入结果集中
      const arr = [];
      for (let i = left; i <= right; i++) {
        arr.push(i);
      }
      res.push(arr);

      // 记录完之后，打破平衡寻找下一个组合，左边界收缩
      sum -= left;
      left++;
    } else if (sum > target) {
      // 2. 窗口内的和太大了，吐出最左边的数字，左边界向右收缩
      sum -= left;
      left++;
    } else {
      // 3. 窗口内的和太小了，右边界向右扩张，吃进新的数字
      right++;
      sum += right;
    }
  }

  return res;
};
