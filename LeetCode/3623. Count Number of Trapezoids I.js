/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function (points) {
  const MOD = 1000000007n;
  const map = new Map();
  // 统计每一行有多少个点
  for (const p of points) {
    let y = p[1];
    map.set(y, (map.get(y) || 0) + 1);
  }
  let ans = 0n;
  let s = 0n;

  // 遍历每个水平线上的点数
  for (let count of map.values()) {
    // 一行组成几条边
    let k = (BigInt(count) * (BigInt(count) - 1n)) / 2n;
    ans = (ans + s * k) % MOD;
    s = (s + k) % MOD;
  }

  return Number(ans);
};
