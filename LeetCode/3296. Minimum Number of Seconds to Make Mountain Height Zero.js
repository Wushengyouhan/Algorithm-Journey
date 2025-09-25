/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function (mountainHeight, workerTimes) {
  // 辅助函数：检查在给定时间T内，工人们能降低多少高度
  function check(T) {
    let totalHeight = 0;
    for (let time of workerTimes) {
      // 计算工人i在时间T内能够降低的高度
      let x = Math.floor(Math.sqrt((2 * T) / time + 0.25) - 0.5); // 通过解不等式计算x
      totalHeight += x;
      if (totalHeight >= mountainHeight) {
        return true; // 如果已达到或超过山的高度，返回true
      }
    }
    return totalHeight >= mountainHeight;
  }

  let left = 0;
  let right = Math.ceil((Math.max(...workerTimes) * mountainHeight * (mountainHeight + 1)) / 2);
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
