/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let ans = 0;
  const map = new Map();

  for (let [w, h] of rectangles) {
    const ratio = w / h;
    const count = map.get(ratio) || 0;
    ans += count;
    map.set(ratio, count + 1);
  }

  return ans;
};
