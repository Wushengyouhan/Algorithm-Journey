/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 1. 递归终止条件
  if (root === null) return null;

  // 2. 处理当前节点：使用 ES6 解构赋值极简交换左右孩子
  [root.left, root.right] = [root.right, root.left];

  // 3. 递归翻转左子树
  invertTree(root.left);

  // 4. 递归翻转右子树
  invertTree(root.right);

  // 返回翻转后的根节点
  return root;
};
