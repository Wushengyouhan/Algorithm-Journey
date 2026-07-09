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
  // 只要还没遇到劈叉点，就一直循环往下走
  while (root !== null) {
    // 情况 1：p 和 q 都比当前节点小，说明 LCA 肯定在左子树
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    }
    // 情况 2：p 和 q 都比当前节点大，说明 LCA 肯定在右子树
    else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    }
    // 情况 3：一左一右，或者其中一个刚好等于 root。这就是劈叉点！
    else {
      return root; // 找到最近公共祖先，直接收工
    }
  }

  return null;
};
