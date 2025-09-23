/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  function check(mid) {
    let sum = 0;
    for (const t of time) {
      sum += Math.floor(mid / t);
    }
    return sum >= totalTrips ? true : false;
  }

  const minT = Math.min(...time);
  // 至少跑一趟的时间
  let left = minT;
  // 最大需要时间
  let right = minT * totalTrips;

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
