/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
  // 终局时，剩下的最后一个人，在他那个只有1个人的圈子里，下标必然是 0
  let res = 0;

  // 时光倒流，从只剩 2 个人开始，一直反推到初始的 num 个人
  // i 代表当前这一局圈子里一共有几个人
  for (let i = 2; i <= num; i++) {
    // 核心推导公式：
    // 在 i 个人的局里，他的位置 = (他在 i-1 个人局里的位置 + 拿掉的 target 个人) % 当前总人数
    res = (res + target) % i;
  }

  // 循环结束时，res 就是在有 num 个人的初始局里，这个幸存者的原始座位号
  return res;
};
