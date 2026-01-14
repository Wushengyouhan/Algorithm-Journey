/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  const stack = [];
  let preSign = '+';
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= '0' && char <= '9') {
      num = num * 10 + parseInt(char);
    }

    if ((char < '0' && char !== ' ') || i === s.length - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          const top = stack.pop();
          stack.push(Math.trunc(top / num));
          break;
      }

      preSign = char;
      num = 0;
    }
  }

  let res = 0;
  for (const val of stack) {
    res += val;
  }
  return res;
};

calculate('3+2*2');
