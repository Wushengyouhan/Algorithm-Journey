/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let ans = 0;
  let left = 0;
  let cnt = { F: 0, T: 0 };

  for (let right = 0; right < answerKey.length; right++) {
    // 1. 进
    cnt[answerKey[right]]++;

    while (cnt['F'] > k && cnt['T'] > k) {
      cnt[answerKey[left]]--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
