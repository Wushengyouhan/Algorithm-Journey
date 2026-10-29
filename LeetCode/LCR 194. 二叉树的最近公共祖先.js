/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 1. 递归终止条件：越过叶子节点，或者碰到了 p 或 q
  if (root === null || root === p || root === q) {
    return root;
  }

  // 2. 后序遍历：先去左子树找，再去右子树找
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 3. 处理汇报结果
  // 左右逢源：说明 p 和 q 分别在我的左右子树中，我就是最近公共祖先！
  if (left !== null && right !== null) {
    return root;
  }

  // 如果左边空，说明都在右边，把右边的结果原封不动传上去
  if (left === null) return right;

  // 如果右边空，说明都在左边，把左边的结果原封不动传上去
  return left;
};
