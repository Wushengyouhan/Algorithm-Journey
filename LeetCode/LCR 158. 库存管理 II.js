/**
 * @param {number[]} stock
 * @return {number}
 */
var inventoryManagement = function (stock) {
  let candidate = null; // 当前站在阵地上的候选人
  let count = 0; // 候选人的生命值 (阵地里的人数)

  for (let i = 0; i < stock.length; i++) {
    // 1. 如果阵地没人了，当前的人自动成为候选人
    if (count === 0) {
      candidate = stock[i];
      count = 1;
    }
    // 2. 如果遇到自己人，生命值加一
    else if (stock[i] === candidate) {
      count++;
    }
    // 3. 如果遇到敌人，一命换一命，生命值减一
    else {
      count--;
    }
  }

  // 活到最后的候选人就是答案
  return candidate;
};
