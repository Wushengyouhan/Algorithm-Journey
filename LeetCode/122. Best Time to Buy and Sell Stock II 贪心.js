/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  // 从第 1 天（索引1）开始，因为要和前一天（索引0）比较
  for (let i = 1; i < prices.length; i++) {
    // 计算差价
    const diff = prices[i] - prices[i - 1];

    // 贪心：只要涨了，就把利润加上
    if (diff > 0) {
      profit += diff;
    }
  }

  return profit;
};
