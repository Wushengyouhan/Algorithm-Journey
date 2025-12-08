/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // 1. 初始化差分数组
  // 题目限制车站一般在 0 到 1000 之间，1001 个位置足够了
  // 如果题目没有明确范围，可以先遍历 trips 找到最大的 to
  const diff = new Array(1001).fill(0);

  // 2. 填充差分数组 (O(N))
  for (const [num, from, to] of trips) {
    diff[from] += num; // 在 from 站上车，人数增加
    diff[to] -= num; // 在 to 站下车，人数减少
  }

  // 3. 扫描前缀和并检查是否超载 (O(1001) -> O(1))
  let currentPassengers = 0;
  for (let i = 0; i < diff.length; i++) {
    currentPassengers += diff[i];

    // 如果当前人数超过容量，无法完成任务
    if (currentPassengers > capacity) {
      return false;
    }
  }

  return true;
};
