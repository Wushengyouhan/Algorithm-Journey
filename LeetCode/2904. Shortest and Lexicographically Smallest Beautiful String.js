/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  // 1的个数不够
  if ((s.match(/1/g) || []).length < k) return '';

  let cnt1 = 0;
  let left = 0;
  let ans = s;

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    cnt1 += parseInt(s[right]);

    // 条件
    while (cnt1 > k || s[left] === '0') {
      cnt1 -= parseInt(s[left]);
      left++;
    }

    // 2. 更新
    if (cnt1 === k) {
      const t = s.slice(left, right + 1);
      if (t.length < ans.length || (t.length === ans.length && t < ans)) {
        ans = t;
      }
    }
  }
  return ans;
};
