/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
  const stack = [n];
  let index = 0;
  for (let i = n - 1; i > 0; i--) {
    const op = index % 4;
    if (op === 0) {
      stack.push(stack.pop() * i);
    } else if (op === 1) {
      const cur = stack.pop();
      stack.push(Math.trunc(cur / i));
    } else if (op === 2) {
      stack.push(i);
    } else {
      stack.push(-i);
    }
    index++;
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
};
