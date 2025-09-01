/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let x = 0, y = 0, direcIndex = 0;
  const direc = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  for (let i of instructions) {
    if (i === "G") {
      x += direc[direcIndex][0];
      y += direc[direcIndex][1];
    } else if (i === "R") {
      direcIndex = (direcIndex + 1) % 4;
    } else {
      direcIndex = (direcIndex + 3) % 4;
    }
  }

  return direcIndex !== 0 || (x === 0 && y === 0);
};