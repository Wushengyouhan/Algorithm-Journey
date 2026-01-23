/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  const n = s.length;

  // --- 主逻辑：遍历所有可能的中心点 ---
  for (let i = 0; i < n; i++) {
    // 1. 找奇数长度的回文串 (中心是 i)
    // 比如 "aba"
    extend(i, i);

    // 2. 找偶数长度的回文串 (中心是 i 和 i+1)
    // 比如 "abba"
    extend(i, i + 1);
  }

  return count;

  // --- 辅助函数：中心扩展 ---
  // 利用 function 关键字提升特性，定义在下面也能被上面调用
  function extend(l, r) {
    // 只要不越界，且左右相等，就是回文
    while (l >= 0 && r < n && s[l] === s[r]) {
      count++; // 找到一个，计数+1
      l--; // 向左扩
      r++; // 向右扩
    }
  }
};
