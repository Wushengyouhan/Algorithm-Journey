/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 1. 终止条件：有一方为空，直接返回另一方（连同它下面的所有节点一起返回）
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  // 2. 两个节点都有值，直接把 root2 的值加到 root1 上（原地修改）
  root1.val += root2.val;

  // 3. 递归合并左子树，并重新接在 root1.left 上
  root1.left = mergeTrees(root1.left, root2.left);

  // 4. 递归合并右子树，并重新接在 root1.right 上
  root1.right = mergeTrees(root1.right, root2.right);

  // 返回被修改后的 root1 作为新树的根
  return root1;
};
