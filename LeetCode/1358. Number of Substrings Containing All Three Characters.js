/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const cnt = [0, 0, 0];
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    cnt[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;

    while (cnt[0] > 0 && cnt[1] > 0 && cnt[2] > 0) {
      cnt[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
      left++;
    }

    // 2.更新
    ans += left;
  }
  return ans;
};
