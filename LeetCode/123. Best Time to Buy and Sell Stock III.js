/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  // 初始化 4 个状态变量
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;

  for (let i = 1; i < prices.length; i++) {
    // 注意这里的顺序，看起来会有覆盖风险，但由于是在取 max
    // 如果今天买入，其实用不到今天的未操作状态(固定为0)
    // 如果今天卖出，用到的是"今天刚买入(不划算)"或"之前买入(划算)"的状态，逻辑自洽。
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
};
