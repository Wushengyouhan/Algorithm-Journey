/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function (prices, strategy, k) {
  const n = prices.length;
  // 利润前缀和
  const sum = Array(n + 1).fill(0);
  // 价格前缀和
  const sumSell = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + prices[i] * strategy[i];
    sumSell[i + 1] = sumSell[i] + prices[i];
  }
  // 不修改
  let ans = sum[n];

  // 讨论的是[i-k, i-1]范围
  // 第一个i是k
  // 最后一个i是n
  for (let i = k; i <= n; i++) {
    // [i-k/2, i-1] 这段是有效的
    const res = sum[i - k] + sum[n] - sum[i] + sumSell[i] - sumSell[i - k / 2];
    ans = Math.max(ans, res);
  }
  return ans;
};
