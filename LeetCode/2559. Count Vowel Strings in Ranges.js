/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  function isVowel(w) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.includes(w[0]) && vowel.includes(w[w.length - 1]);
  }
  const s = Array(words.length + 1);
  s[0] = 0;
  for (let i = 0; i < words.length; i++) {
    s[i + 1] = s[i] + (isVowel(words[i]) ? 1 : 0);
  }

  // 遍历queries, 计算每个答案
  return queries.map(([l, r]) => s[r + 1] - s[l]);
};
