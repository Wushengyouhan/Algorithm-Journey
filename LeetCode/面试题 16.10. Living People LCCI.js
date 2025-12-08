/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
  // 1. 定义常量，避免魔法数字
  const START_YEAR = 1900;
  const END_YEAR = 2000;
  // 数组长度：年份跨度 + 1 (包含2000) + 1 (处理 death+1 的溢出)
  const RANGE = END_YEAR - START_YEAR + 2;

  // 2. 初始化差分数组
  // diff[i] 表示相对于 START_YEAR，第 i 年人口的变化量
  const diff = new Array(RANGE).fill(0);

  // 3. 填充差分
  for (let i = 0; i < birth.length; i++) {
    const birthIndex = birth[i] - START_YEAR;
    const deathIndex = death[i] - START_YEAR;

    diff[birthIndex] += 1; // 出生，人口 +1
    // 题目定义：死于当年算当年活着，所以次年人口才减少
    diff[deathIndex + 1] -= 1;
  }

  // 4. 前缀和还原，寻找最大值
  let maxPop = 0; // 历史最大人口
  let currentPop = 0; // 当前年份人口
  let bestYear = START_YEAR; // 结果年份

  // 只需要遍历到 2000 年对应的下标即可 (即 END_YEAR - START_YEAR)
  // 但遍历完整个 diff 数组也没错，后面的都是 0 或负数，不影响最大值
  for (let i = 0; i < diff.length; i++) {
    currentPop += diff[i];

    // 必须严格大于，保证相同时取最小年份
    if (currentPop > maxPop) {
      maxPop = currentPop;
      bestYear = START_YEAR + i;
    }
  }

  return bestYear;
};
