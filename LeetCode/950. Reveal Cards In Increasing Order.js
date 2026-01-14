/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  // 1. 先对牌进行从小到大排序
  deck.sort((a, b) => a - b);

  const n = deck.length;
  // 2. 初始化一个队列，里面存的是索引 [0, 1, 2, ... n-1]
  const indexQueue = [];
  for (let i = 0; i < n; i++) {
    indexQueue.push(i);
  }

  const result = new Array(n);

  // 3. 遍历排序好的牌，一张张找位置
  for (const card of deck) {
    // 3.1 按照规则，翻开第一张牌：
    // 从队列头部取出一个索引，这个位置就放当前这张最小的牌
    const idx = indexQueue.shift();
    result[idx] = card;

    // 3.2 按照规则，如果还有牌，把下一张牌放到那个底部：
    // 也就是把当前队列头部的索引移到队列尾部
    if (indexQueue.length > 0) {
      const nextIdx = indexQueue.shift();
      indexQueue.push(nextIdx);
    }
  }

  return result;
};
