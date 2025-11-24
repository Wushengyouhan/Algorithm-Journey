/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function (s, t, nextCost, previousCost) {
  const SIGMA = 26;
  // 顺时针前缀和数组
  const nxtSum = Array(2 * SIGMA).fill(0);
  // 逆时针前缀和数组
  const preSum = Array(2 * SIGMA).fill(0);

  for (let i = 0; i < SIGMA * 2; i++) {
    nxtSum[i + 1] = nxtSum[i] + nextCost[i % SIGMA];
    preSum[i + 1] = preSum[i] + previousCost[i % SIGMA];
  }

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    x = s.charCodeAt(i) - 97;
    y = t.charCodeAt(i) - 97;
    const nextCostSum = nxtSum[y < x ? y + SIGMA : y] - nxtSum[x];
    const preCostSum = preSum[(x < y ? x + SIGMA : x) + 1] - preSum[y + 1];
    ans += Math.min(nextCostSum, preCostSum);
  }

  return ans;
};
