var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price); // 更新最低买入价
    maxProfit = Math.max(maxProfit, price - minPrice); // 更新最大利润
  }

  return maxProfit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
