/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let minOpen = 0; // 尽可能少：把 * 当作 )
  let maxOpen = 0; // 尽可能多：把 * 当作 (

  for (const char of s) {
    if (char === '(') {
      minOpen++;
      maxOpen++;
    } else if (char === ')') {
      minOpen--;
      maxOpen--;
    } else {
      // 遇到 '*'
      minOpen--; // 假设 * 是 )，尝试抵消左括号
      maxOpen++; // 假设 * 是 (，增加左括号
    }

    // 1. 检查上界：如果 maxOpen < 0，说明右括号太多了，神仙难救
    if (maxOpen < 0) {
      return false;
    }

    // 2. 修正下界：minOpen 不能为负数
    // 如果 minOpen < 0，说明把 * 当作 ) 减过头了（变成负数意味着右括号比左括号多，这在逻辑上是不允许的）
    // 但因为 * 也可以是空字符串 ""，所以我们底线是 0，不能更低
    if (minOpen < 0) {
      minOpen = 0;
    }
  }

  // 3. 最终检查：
  // 循环结束后，必须保证所有的左括号都能被消除
  // 即最小剩余左括号数量必须为 0
  return minOpen === 0;
};
