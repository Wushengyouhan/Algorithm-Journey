/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let ans = 0,
    vowel = 0;

  for (let i = 0; i < s.length; i++) {
    // 1. 进入窗口
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
      vowel++;
    }

    // 窗口长度不足k个
    if (i < k - 1) continue;

    // 2. 更新
    ans = Math.max(ans, vowel);

    // 3. 离开窗口，为下一个循环做准备
    let out = s[i - k + 1];
    if (out === 'a' || out === 'e' || out === 'i' || out === 'o' || out === 'u') {
      vowel--;
    }
  }

  return ans;
};
