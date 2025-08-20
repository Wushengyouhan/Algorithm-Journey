/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          let matchlen = 0
          for (let j = 0; j < needle.length; j++) {
              if (haystack[i+j] !== needle[j]) {
                  break
              } else {
                  matchlen++
              }
          }
          if (matchlen === needle.length) return i
      }
  }
  return -1
};

console.log(strStr("hello", "ll"));