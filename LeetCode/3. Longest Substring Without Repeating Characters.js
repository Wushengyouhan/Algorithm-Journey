/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  const cnt = new Map();

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    const c = s[right];
    cnt.set(c, (cnt.get(c) || 0) + 1);

    // 2. 重复值出队
    while (cnt.get(c) > 1) {
      cnt.set(s[left], cnt.get(s[left]) - 1);
      left++;
    }

    // 3. 更新最大值
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};