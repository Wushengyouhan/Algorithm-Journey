/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const n = word1.length, m = word2.length;
  let ans = [];
  for (let i = 0; i < n || i < m; i++) {
      if (i < n) {
          ans.push(word1[i]);
      }
      if (i < m) {
          ans.push(word2[i]);
      }
  }
  return ans.join('');
}