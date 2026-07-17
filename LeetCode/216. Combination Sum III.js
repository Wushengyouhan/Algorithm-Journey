/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const path = [];
  let sum = 0; // 记录当前 path 里的数字总和

  const backtrack = function (startIndex) {
    // ⭐ 剪枝 1：如果当前 sum 已经大于目标值 n 了，没必要再往后加数字了，直接砍掉！
    if (sum > n) {
      return;
    }

    // 1. 终止条件：人数凑齐 k 个了
    if (path.length === k) {
      // 只有当总和刚好等于目标值 n 时，才收集结果
      if (sum === n) {
        res.push([...path]);
      }
      return; // 凑齐人数了，不管对不对都要结束这根树枝
    }

    // 2. 单层循环
    // ⭐ 剪枝 2：还是“抓壮丁”原理，剩下的数字不够凑齐 k 个时，提前结束循环
    // 题目规定最大数字是 9，所以上界从 9 优化为 9 - (k - path.length) + 1
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      // 做选择
      path.push(i);
      sum += i;

      // 递归
      backtrack(i + 1);

      // 撤销选择 (回溯)
      path.pop();
      sum -= i;
    }
  };

  // 从数字 1 开始
  backtrack(1);

  return res;
};
combinationSum3(2, 3);
