/**
 * function TreeNode(val, left, right) { ... }
 */
var preorderTraversal = function (root) {
  const res = [];

  // 定义辅助递归函数
  const traverse = function (node) {
    if (node === null) return;

    res.push(node.val); // 中：先处理根节点
    traverse(node.left); // 左：递归左子树
    traverse(node.right); // 右：递归右子树
  };

  traverse(root);
  return res;
};
