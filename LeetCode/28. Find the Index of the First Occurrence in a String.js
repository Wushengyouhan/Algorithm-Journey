/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  // ⭐ 核心魔法：外层循环控制滑动窗口的起点
  // 注意边界是 i <= m - n，这把过滤掉了所有长度不够的无效判定
  for (let i = 0; i <= m - n; i++) {
    // 直接截取长度为 n 的子串进行比较
    if (haystack.slice(i, i + n) === needle) {
      return i;
    }
  }

  return -1;
};
