/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  // 用两个队列分别存两方阵营的下标
  const radiant = [];
  const dire = [];

  // 1. 初始化队列
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  // 2. 模拟投票过程
  // 只要两个阵营都有人，就继续pk
  while (radiant.length > 0 && dire.length > 0) {
    // 取出队头（当前轮次最早的两个人）
    const rIndex = radiant.shift();
    const dIndex = dire.shift();

    if (rIndex < dIndex) {
      // R 在前面，R 赢了
      // D 被淘汰（不加回队列）
      // R 进入下一轮：索引 + n 代表下一轮的位置，排到队尾去
      radiant.push(rIndex + n);
    } else {
      // D 在前面，D 赢了
      // R 被淘汰
      // D 进入下一轮
      dire.push(dIndex + n);
    }
  }

  // 3. 判断谁还有人
  return radiant.length > 0 ? 'Radiant' : 'Dire';
};
