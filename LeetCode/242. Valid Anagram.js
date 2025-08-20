/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let countMap = new Map();
  for (let char of s) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!countMap.get(char) || countMap.get(char) === 0) {
      return false;
    }

    countMap.set(char, countMap.get(char) - 1);
  }

  return true;
};