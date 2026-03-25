/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  // 当左指针还没有越过右指针时，继续交换
  while (left < right) {
    // 1. 交换元素 (使用 ES6 的解构赋值语法最简洁)
    [s[left], s[right]] = [s[right], s[left]];

    // 2. 指针向中间靠拢
    left++;
    right--;
  }

  // 题目要求不要返回任何东西，原地修改即可
};
