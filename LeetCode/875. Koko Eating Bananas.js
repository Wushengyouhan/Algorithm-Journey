/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  function check(k) {
    let need = 0;
    for (let p of piles) {
      need += Math.ceil(p / k);
    }
    return need <= h ? true : false;
  }

  let left = 0;
  let right = Math.max(...piles);

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
