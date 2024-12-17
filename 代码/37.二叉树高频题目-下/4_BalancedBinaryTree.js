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
let balance;
var isBalanced = function (root) {
  balance = true;
  height(root);
  return balance;
};

function height(cur) {
  // 不平衡的话，返回什么都可以，这时就直接返回0把
  // 节点为null，就返回0
  if (!balance || !cur) {
    return 0;
  }

  let lh = height(cur.left);
  let rh = height(cur.right);

  if (Math.abs(lh - rh) > 1) {
    // 打破平衡，修改标志位
    balance = false;
  }

  return Math.max(lh, rh) + 1;
}
