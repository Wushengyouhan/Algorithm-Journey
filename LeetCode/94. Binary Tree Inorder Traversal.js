/**
 * function TreeNode(val, left, right) { ... }
 */
var inorderTraversal = function (root) {
  // 1. 定义结果数组
  const res = [];

  // 2. 定义辅助递归函数
  const traverse = function (node) {
    // 终止条件：遇到空节点直接返回
    if (node === null) {
      return;
    }

    // 单层递归逻辑：左 -> 中 -> 右
    traverse(node.left); // 1. 递归遍历左子树
    res.push(node.val); // 2. 处理当前节点的值（收集结果）
    traverse(node.right); // 3. 递归遍历右子树
  };

  // 3. 从根节点开始触发递归
  traverse(root);

  // 4. 返回最终结果
  return res;
};
