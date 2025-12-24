/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  let ans = []; // 用来存结果的数组（0代表A，1代表B）
  let depth = 0; // 当前走到第几层了

  for (let char of seq) {
    if (char === '(') {
      // 1. 遇到左括号：这是新的一层的开始
      depth++;

      // 2. 核心逻辑：按深度的奇偶发牌
      // 奇数层给 A (0)，偶数层给 B (1)
      if (depth % 2 === 1) {
        ans.push(0); // 单数层 -> A
      } else {
        ans.push(1); // 双数层 -> B
      }
    } else {
      // char === ')'
      // 3. 遇到右括号：这是一层的结束
      // 它的归属和这一层的左括号一样，所以逻辑和上面一样
      if (depth % 2 === 1) {
        ans.push(0);
      } else {
        ans.push(1);
      }

      // 4. 分配完了，层数要退回来
      depth--;
    }
  }

  return ans;
};
