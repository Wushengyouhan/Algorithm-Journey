/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
  // 四皇后: 1111
  let limit = (1 << n) - 1;
  return f(limit, 0, 0, 0);
};

// limit : 当前是几皇后问题
// 之前皇后的列影响：col
// 之前皇后的右上 -> 左下对角线影响：left, 数字低位，对应棋盘左边
// 之前皇后的左上 -> 右下对角线影响：right，数字高位， 对应棋盘右边
function f(limit, col, left, right) {
  // 所有皇后放完了！
  if (col === limit) {
    return 1;
  }
  // 限制，不可放的位置是1
  const ban = col | left | right;
  // 可以放的位置是1
  let candidate = limit & ~ban;
  let ans = 0;

  // 用来遍历候选的位置，从低位开始
  while (candidate !== 0) {
    // 提取出最右侧的1
    let place = candidate & -candidate;
    // 把该位置从candidate删除
    candidate ^= place;
    // col 列约束
    // (left | place) >> 1，向低位移动，约束左下角
    // (right | place) << 1)，向高位移动，约束右下角
    ans += f(limit, col | place, (left | place) >> 1, (right | place) << 1);
  }

  return ans;
}
