/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const n = s.length;
  const ordA = 'a'.charCodeAt(0);

  // 统计 [1,n-1]字母分布
  const sufCnt = Array(26).fill(0);
  for (let i = 1; i < n; i++) {
    sufCnt[s[i].charCodeAt(0) - ordA]++;
  }

  // 记录[0,i-1]出现的字母
  const preHas = Array(26).fill(false);
  // 记录字母组合是否出现过
  const has = Array(26)
    .fill()
    .map(() => Array(26).fill(false));

  let ans = 0;

  for (let i = 1; i < n - 1; i++) {
    // 中间字母的序号
    const mid = s.charCodeAt(i) - ordA;
    sufCnt[mid]--;
    // 把前一个字母加入preHas
    preHas[s.charCodeAt(i - 1) - ordA] = true;
    // 枚举两侧字母
    for (let alpha = 0; alpha < 26; alpha++) {
      if (preHas[alpha] && sufCnt[alpha] && !has[mid][alpha]) {
        has[mid][alpha] = true;
        ans++;
      }
    }
  }
  return ans;
};
