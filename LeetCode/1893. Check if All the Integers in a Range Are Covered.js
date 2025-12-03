/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  // 1. 初始化差分数组
  // 题目限制坐标范围 1 <= start <= end <= 50
  // 差分操作需要访问 diff[end + 1]，即最大可能访问下标 51。
  // 为了不越界，数组长度设为 52 (下标 0~51)。
  const diff = new Array(52).fill(0);

  // 2. 构造差分数组
  // 将所有给定的覆盖区间标记到差分数组上
  for (const [start, end] of ranges) {
    diff[start] += 1; // 进入覆盖区域：计数 +1
    diff[end + 1] -= 1; // 离开覆盖区域的下一格：计数 -1
  }

  // 3. 前缀和还原并检查
  // sum 代表当前数字 i 被多少个区间覆盖（实时覆盖层数）
  let sum = 0;

  // 优化：只需要遍历到 right 即可，大于 right 的数字是否被覆盖我们不关心
  for (let i = 0; i <= right; i++) {
    sum += diff[i]; // 累加差分值，还原成真实覆盖数

    // 核心判断：
    // 条件1 (i >= left): 我们只关心 [left, right] 范围内的点
    // 条件2 (sum === 0): 当前点的覆盖数为 0，说明它是“漏网之鱼”
    if (i >= left && sum === 0) {
      return false; // 只要发现一个没被盖住，直接失败
    }
  }

  // 循环走完没报错，说明 [left, right] 里的每个点 sum 都大于 0
  return true;
};
