/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0, y = 0;

  for (m of moves) {
    switch (m) {
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
    }
  }

  return x === 0 && y === 0;
};