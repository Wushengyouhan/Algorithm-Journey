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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) {
    return null;
  }
  // 当前值比最小值小，左边就全砍掉
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  // 当前值比最大值大，右边就全砍掉
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
