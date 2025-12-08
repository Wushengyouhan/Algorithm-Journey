/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let count = 0; // 既是结果，也是当前需要扣除的电量

  for (const battery of batteryPercentages) {
    // 当前电量 - 已经测试过的次数 = 当前剩余真实电量
    if (battery - count > 0) {
      count++;
    }
  }

  return count;
};
