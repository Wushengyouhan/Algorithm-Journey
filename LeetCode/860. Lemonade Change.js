/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;

  for (const b of bills) {
    if (b === 5) {
      // 1. 收 5 元：纯赚
      five++;
    } else if (b === 10) {
      // 2. 收 10 元：返还一张 5 元
      five--;
      ten++;
    } else if (ten > 0) {
      // 3. 收 20 元 (方案A)：贪心，优先消耗 10 元
      // 此时不用担心 ten 透支，因为 if 保证了 ten > 0
      ten--;
      five--;
    } else {
      // 4. 收 20 元 (方案B)：没有 10 元，只能消耗三张 5 元
      five -= 3;
    }

    // 【核心校验】
    // 无论上面走了哪条路，只要 5 元不够减了，说明无法找零
    if (five < 0) {
      return false;
    }
  }

  return true;
};
