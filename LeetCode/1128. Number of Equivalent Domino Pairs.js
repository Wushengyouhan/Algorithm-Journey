/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let ans = 0;
  // 创建一个 10 * 10 的二维数组
  const cnt = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

  for (const [x, y] of dominoes) {
    const a = Math.min(x, y);
    const b = Math.max(x, y);
    // 1. 更新ans
    ans += cnt[a][b];
    // 2. 计数加1
    cnt[a][b]++;
  }
  return ans;
};
