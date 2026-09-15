var inventoryManagement = function (stock, cnt) {
  // 数组太长时，sort 底层是 $O(N \log N)$
  return stock.sort((a, b) => a - b).slice(0, cnt);
};
