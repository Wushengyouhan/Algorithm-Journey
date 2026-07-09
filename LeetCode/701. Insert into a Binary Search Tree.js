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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 1. 终止条件：如果是空位，直接建房子并把钥匙（新节点）交还给上一层
  if (root === null) {
    return new TreeNode(val);
  }

  // 2. 如果目标值比当前节点小，去左子树找空位，并让当前节点的 left 重新接住返回的树
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }

  // 3. 如果目标值比当前节点大，去右子树找空位，并让当前节点的 right 重新接住返回的树
  else if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  // 4. 当前节点处理完毕，把缝合好的自己交还给上一层
  return root;
};
