/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false;

  for (let i = 1; i <= s.length / 2; i++) {
    let sub = s.slice(0, i);
    if (s.length % i === 0) {
      let repeated = sub.repeat(s.length / i);
      if (repeated === s) {
        return true;
      }
    }
  }

  return false
};
