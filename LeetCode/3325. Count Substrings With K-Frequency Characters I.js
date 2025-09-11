/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function (s, k) {
  const cnt = new Map();
  let ans = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    const c = s[right];
    cnt.set(c, (cnt.get(c) || 0) + 1);

    // 2. 出队
    while (cnt.get(c) >= k) {
      const out = s[left];
      cnt.set(out, cnt.get(out) - 1);
      left++;
    }

    // 3. 更新
    ans += left;
  }

  return ans;
};
