/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    // k是取所有的
    const sumAll = cardPoints.reduce((acc, curr) => acc + curr, 0)
    if (k === cardPoints.length) return sumAll;
    
    // 求连续m个元素的最小值
    let m = cardPoints.length - k;
    let sum = 0;
    let minS = Infinity;

    for (let i = 0; i < cardPoints.length; i++) {
      // 1. 进
      sum += cardPoints[i]

      if ( i < m - 1) {
        continue;
      }

      // 2. 更新
      minS = Math.min(minS, sum)

      // 3. 出
      sum -= cardPoints[i - m + 1]
    }
    return sumAll - minS;
};