/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;

  let [x1, y1] = coordinates[0];
  let [x2, y2] = coordinates[1];

  if (x1 !== x2) {
    let k = (y2 - y1) / (x2 - x1);
    let b = y1 - k * x1;

    for (let i = 2; i < coordinates.length; i++) {
      let [xi, yi] = coordinates[i];

      if (yi !== k * xi + b) return false;
    }
  } else {
    for (let i = 3; i < coordinates.length; i++) {
      if (coordinates[i][0] !== coordinates[0][0]) return false;
    }
  }

  return true;
};
