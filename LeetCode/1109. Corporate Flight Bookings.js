/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  // 1. 开辟 n + 2 的空间
  // 为什么是 n + 2？
  // - 下标 0：我们要舍弃不用
  // - 下标 1 到 n：存实际数据
  // - 下标 n + 1：用来接 last + 1 的减法操作，防止越界
  const diff = new Array(n + 2).fill(0);

  // 2. 直接操作，逻辑完全对应题目描述
  for (const [first, last, seats] of bookings) {
    diff[first] += seats; // 第 first 个航班开始加
    diff[last + 1] -= seats; // 第 last + 1 个航班开始减
  }

  // 3. 求前缀和
  // 从 1 开始遍历到 n (因为我们要的结果是 1~n)
  for (let i = 1; i <= n; i++) {
    diff[i] += diff[i - 1];
  }

  // 4. 截取有效部分返回
  // 我们的有效数据是从下标 1 开始，到下标 n 结束
  // slice 是左闭右开，所以是 slice(1, n + 1)
  return diff.slice(1, n + 1);
};
