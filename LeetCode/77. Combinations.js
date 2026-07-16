/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []; // 存放最终所有组合的大数组
  const path = []; // 存放当前正在摸索的这条路径

  // 回溯辅助函数
  const backtrack = function (startIndex) {
    // 1. 终止条件：路径里的数字够 k 个了
    if (path.length === k) {
      // 🚨 坑点警报：必须做一次浅拷贝！
      res.push([...path]);
      return;
    }

    // 2. 单层循环逻辑
    // ⭐ 剪枝优化：如果后面剩下的数字，连凑齐 k 个都不够了，直接停止循环！
    // 循环上界从 n 优化为 n - (k - path.length) + 1
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i); // 做选择：把当前数字 i 加入路径

      backtrack(i + 1); // 递归：往下钻一层，起始位置是 i 的下一个

      path.pop(); // 撤销选择：回溯，把 i 吐出来，尝试下一个数字
    }
  };

  // 从数字 1 开始搜索
  backtrack(1);

  return res;
};

combine(4, 2);
