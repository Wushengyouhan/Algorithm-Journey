/**
 * @param {number[]} places
 * @return {boolean}
 */
var checkDynasty = function (places) {
  const set = new Set();
  let max = 0;
  let min = 14; // 题目提示数字最大为 13，初始最小值设为 14 即可

  for (const num of places) {
    // 如果是 0 (未知朝代/癞子)，直接跳过不处理
    if (num === 0) continue;

    // 条件 1：除 0 外不能有重复的牌，遇到重复直接返回 false
    if (set.has(num)) return false;
    set.add(num); // 把当前数字加入集合防重

    // 维护非 0 牌的最大值和最小值
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  // 条件 2：最大牌和最小牌的差值必须小于 5
  return max - min < 5;
};
