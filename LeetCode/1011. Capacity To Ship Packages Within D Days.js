/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // 这个运载量能否在规定天数完成
  function check(capacity) {
    // need为需要的天数
    let need = 1;
    // sum为包裹综合
    let sum = 0;
    for (let w of weights) {
      if (sum + w > capacity) {
        need += 1;
        sum = 0;
      }
      sum += w;
    }

    return need <= days ? true : false;
  }

  let left = Math.max(...weights);
  let right = weights.reduce((acc, curr) => curr + acc, 0);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
