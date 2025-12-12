/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 1. 准备一个空箱子（栈）
  const stack = [];

  // 2. 准备一个指针，指向 popped 数组当前需要处理的元素（老板清单上的第几个）
  let popIndex = 0;

  // 3. 遍历 pushed 数组（模拟传送带源源不断进货）
  for (let num of pushed) {
    // 【动作】：不管怎样，先把货放进箱子
    stack.push(num);

    // 【检查】：每放进一个，就看看能不能出货
    // 条件：
    // 1. 箱子不能为空 (stack.length > 0)
    // 2. 箱子顶部的货 (stack[stack.length - 1]) 正好是老板现在要的 (popped[popIndex])
    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      // 既然对上了，那就赶紧出货
      stack.pop();
      // 这里的货搞定了，看清单的下一项
      popIndex++;
    }
  }

  // 4. 只有箱子彻底空了，才说明所有货都按顺序发出去了
  return stack.length === 0;
};
