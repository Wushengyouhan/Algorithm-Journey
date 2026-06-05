/**
 * function TreeNode(val, left, right) { ... }
 */
var preorderTraversal = function (root) {
  // 坑1：必须先判断空树，否则下面初始化 stack 压入 null 会报错
  if (root === null) return [];

  const res = [];
  const stack = [root]; // 初始化栈，把根节点放进去

  while (stack.length > 0) {
    // 1. 弹出栈顶元素并处理（中）
    const node = stack.pop();
    res.push(node.val);

    // 2. 压栈操作
    // 坑2：栈是后进先出！为了让“左”先出，必须先压“右”！
    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return res;
};
