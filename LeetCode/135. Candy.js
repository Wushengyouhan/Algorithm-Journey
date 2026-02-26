/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  // 1. 初始化：每人至少 1 个
  const candies = new Array(n).fill(1);

  // 2. 左 -> 右：满足左规则
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // 3. 右 -> 左：满足右规则
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 核心：既要保留左边的战果，又要满足右边的要求，取最大值
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // 4. 求和
  return candies.reduce((acc, val) => acc + val, 0);
};
