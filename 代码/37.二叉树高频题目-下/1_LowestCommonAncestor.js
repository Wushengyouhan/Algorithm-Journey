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
  // 遇到空，或者p，或者q，直接返回
  if (root === null || root === p || root === q) {
    return root;
  }
  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);

  if (l && r) {
    // 左树也搜到，右树也搜到，返回root
    return root;
  }

  if (!l && !r) {
    // 都没搜到返回空
    return null;
  }

  // l和r一个为空，一个不为空
  // 返回不空的那个
  return l ?? r;
};
