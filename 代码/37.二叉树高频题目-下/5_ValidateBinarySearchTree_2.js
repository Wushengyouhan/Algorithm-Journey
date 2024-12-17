// 递归解法
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
// 记录上个节点那棵树的最大最小值
let max, min;
var isValidBST = function (root) {
  // baseCase
  if (!root) {
    // 注意空节点最大最小值的设置
    min = Number.POSITIVE_INFINITY;
    max = Number.NEGATIVE_INFINITY;
    return true;
  }

  let lok = isValidBST(root.left);
  let lmin = min;
  let lmax = max;
  let rok = isValidBST(root.right);
  let rmin = min;
  let rmax = max;

  // 递归结束更新这棵子树的最大最小值
  min = Math.min(lmin, rmin, root.val);
  max = Math.max(lmax, rmax, root.val);

  return lok && rok && lmax < root.val && root.val < rmin;
};
