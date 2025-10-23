/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  // 看看分的堆数够不够
  const check = function (m) {
    let cnt = 0;
    for (let c of candies) {
      cnt += Math.floor(c / m);
      if (cnt >= k) return true;
    }
    return false;
  };

  let left = 1;
  let right = Math.max(...candies);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

maximumCandies([5, 8, 6], 3);
