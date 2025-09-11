/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  const cnt = { 0: 0, 1: 0 };
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    let c = s[right];
    cnt[c] += 1;

    while (cnt[0] > k && cnt[1] > k) {
      cnt[s[left]] -= 1;
      left++;
    }

    // 2. 更新
    ans += right - left + 1;
  }

  return ans;
};
