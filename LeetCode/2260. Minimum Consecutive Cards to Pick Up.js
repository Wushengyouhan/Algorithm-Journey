/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  // 答案需要初始化成一个大的值
  let ans = Infinity;
  const map = new Map();
  for (let i = 0; i < cards.length; i++) {
    const x = cards[i];
    // 计算之前先判断有没有
    if (map.has(x)) {
      // 计算长度是 i - map.get(x) + 1
      ans = Math.min(ans, i - map.get(x) + 1);
    }
    map.set(x, i);
  }
  return ans === Infinity ? -1 : ans;
};
