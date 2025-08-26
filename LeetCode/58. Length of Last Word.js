/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let endIndex = s.length - 1

    while (s[endIndex] === ' ') {
      endIndex--;
    }

    let startIndex = endIndex - 1;
    while (s[startIndex] !== ' ' && startIndex >= 0) {
      startIndex--;
    }

    return endIndex - startIndex;
};