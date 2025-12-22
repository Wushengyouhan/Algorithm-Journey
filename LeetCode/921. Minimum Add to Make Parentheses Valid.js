/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let needRight = 0;
  let needLeft = 0;
  for (let c of s) {
    if (c === '(') {
      needRight++;
    } else {
      if (needRight > 0) {
        needRight--;
      } else {
        needLeft++;
      }
    }
  }
  return needLeft + needRight;
};
