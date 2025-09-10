/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const m = s.length / 4;
  const cnt = new Map();

  for (let c of s) {
    cnt.set(c, (cnt.get(c) || 0) + 1);
  }

  // 满足平衡条件
  if (cnt.size === 4 && Math.max(...cnt.values()) === m) return 0;

  let ans = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // 1. 进
    let c = s[right];
    cnt.set(c, cnt.get(c) - 1);

    // 2. 更新后出队
    while (Math.max(...cnt.values()) <= m) {
      ans = Math.min(ans, right - left + 1);
      let leftChar = s[left];
      cnt.set(leftChar, cnt.get(leftChar) + 1);
      left++;
    }
  }

  return ans;
};
