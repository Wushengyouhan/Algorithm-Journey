/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 1. 函数名从 'help' 改为 'build' (或 process)
  // 含义：构建最终的字符串
  function build(str) {
    // 2. 变量名从 'text' 改为 'stack'
    // 含义：明确这是一个栈结构
    const stack = [];

    // 3. 循环变量从 'c' 改为 'char'
    // 含义：更直观地表示 Character
    for (const char of str) {
      if (char !== '#') {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
    return stack.join('');
  }

  return build(s) === build(t);
};
