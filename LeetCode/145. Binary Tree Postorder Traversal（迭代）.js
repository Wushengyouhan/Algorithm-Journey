/**
 * function TreeNode(val, left, right) { ... }
 */
var postorderTraversal = function (root) {
  if (root === null) return [];

  const res = [];
  const stack = [root];

  while (stack.length > 0) {
    // 出栈即记录（此时收集的顺序是：中 -> 右 -> 左）
    const node = stack.pop();
    res.push(node.val);

    // 坑1：与前序相反！必须先压“左”，再压“右”
    // 这样右节点才会在栈顶，下一次优先出栈
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  // 坑2：千万别忘了最后反转数组！
  return res.reverse();
};
