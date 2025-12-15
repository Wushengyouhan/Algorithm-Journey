/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 1. 根据 '/' 分割路径
  const names = path.split('/');
  const stack = [];

  // 2. 遍历分割后的部分
  for (const name of names) {
    if (name === '..') {
      // 遇到 .. : 返回上一级，弹出栈顶
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (name && name !== '.') {
      // 遇到有效文件名 (非空 且 非'.') : 入栈
      // 注意：JS中空字符串 '' 为 falsy，会被 name 过滤掉
      // 这里的条件等价于: name !== '' && name !== '.'
      stack.push(name);
    }
    // 如果是 '.' 或者 ''，直接跳过，不做处理
  }

  // 3. 拼接结果，始终以 / 开头
  return '/' + stack.join('/');
};
