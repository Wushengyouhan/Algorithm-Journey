/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // 1. 转为数组，方便修改
  const arr = s.split('');
  const stack = []; // 存左括号的下标

  // 2. 遍历：标记无效的 ')' 并记录 '('
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i); // 记录左括号下标
    } else if (arr[i] === ')') {
      if (stack.length > 0) {
        stack.pop(); // 匹配成功，消耗一个左括号
      } else {
        arr[i] = ''; // 栈空了还来右括号，说明是多余的，直接标记删除
      }
    }
  }

  // 3. 清理：栈里剩下的都是多余的 '('
  while (stack.length > 0) {
    const index = stack.pop();
    arr[index] = ''; // 标记删除
  }

  // 4. 拼接回字符串
  return arr.join('');
};
