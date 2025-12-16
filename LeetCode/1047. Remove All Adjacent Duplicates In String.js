/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (const c of s) {
    const top = stack[stack.length - 1];
    if (top === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
};
