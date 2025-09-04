/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  let ans = 0;
  let left = 0;
  let cnt = new Map();
  for (let right = 0; right < s.length; right++) {
    // 1. 进
    const c = s[right];
    cnt.set(c, (cnt.get(c) || 0) + 1);

    // 2. 判断重复
    while (cnt.get(c) > 2) {
      const out = s[left];
      cnt.set(out, cnt.get(out) - 1);
      left++;
    }

    // 3. 更新
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

maximumLengthSubstring('bcbbbcba');
