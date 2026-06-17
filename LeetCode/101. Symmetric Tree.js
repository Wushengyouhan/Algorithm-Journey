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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true; // 空树一定是对称的

  // 辅助函数：专门用来比较两个节点是否对称（镜像）
  const compare = function (left, right) {
    // 1. 排查节点为空的情况
    if (left === null && right === null) return true; // 均为空，对称
    if (left === null || right === null) return false; // 一个空一个不空，不对称

    // 2. 节点都不为空，但值不相同的情况
    if (left.val !== right.val) return false;

    // 3. 此时左右节点值相同，继续向下递归
    // 比较外侧：左节点的左孩子 vs 右节点的右孩子
    let outside = compare(left.left, right.right);
    // 比较内侧：左节点的右孩子 vs 右节点的左孩子
    let inside = compare(left.right, right.left);

    // 必须内外侧都对称，这棵子树才是真正的对称
    return outside && inside;
  };

  // 从根节点的左右两个孩子开始比较
  return compare(root.left, root.right);
};
