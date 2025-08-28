/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function(bills) {
  let five = 0, ten = 0;
  for (const b of bills) {
      if (b === 5) { // 无需找零
          five++;
      } else if (b === 10) { // 返还 5
          five--;
          ten++;
      } else if (ten > 0) { // 此时 b=20，优先用 10 美元，返还 10+5
          five--;
          ten--;
      } else { // 此时 b=20，返还 5+5+5
          five -= 3;
      }
      if (five < 0) { // 无法正确找零
          return false;
      }
  }
  return true;
};
