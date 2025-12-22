/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const res = [];
  let level = 0;

  for (const char of s) {
    if (char === '(') {
      // 只有已经在内部时 (level > 0)，才保留左括号
      // 意味着 level=0 时的那个最外层左括号被跳过了
      if (level > 0) res.push(char);
      level++;
    } else {
      // 只有还没到最外层时 (level > 1)，才保留右括号
      // 意味着 level=1 时的那个最外层右括号被跳过了
      if (level > 1) res.push(char);
      level--;
    }
  }

  return res.join('');
};
