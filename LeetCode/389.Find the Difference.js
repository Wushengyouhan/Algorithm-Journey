/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
  let str = s + t;
  let result = 0;
  for (let char of str) {
      result ^= char.charCodeAt(0);
  }
  return String.fromCharCode(result); 
};