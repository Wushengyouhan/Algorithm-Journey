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
var calculateDepth = function (root) {
  // 递归终止条件：如果是空节点，深度当然是 0
  if (root === null) return 0;

  // 问左副总：你那边有多深？
  const leftDepth = calculateDepth(root.left);
  // 问右副总：你那边有多深？
  const rightDepth = calculateDepth(root.right);

  // 取两者的最大值，加上自己这一层 (1)，向上级汇报！
  return Math.max(leftDepth, rightDepth) + 1;

  // 面试装 X 一行流：
  // return root === null ? 0 : Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
};
