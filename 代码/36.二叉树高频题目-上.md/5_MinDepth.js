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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return 1;
  }

  let ldeep = Infinity;
  let rdeep = Infinity;

  // 左节点必须有值，才去调。如果左节点是空，不是叶子节点，却返回0，就会出错。
  if (root.left) {
    ldeep = minDepth(root.left);
  }

  // 右节点必须有值，才去调。如果右节点是空，不是叶子节点，却返回0，就会出错。
  if (root.right) {
    rdeep = minDepth(root.right);
  }

  return Math.min(ldeep, rdeep) + 1;
};
