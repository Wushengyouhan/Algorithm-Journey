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
var countNodes = function (root) {
  if (root === null) return 0;

  // 初始化左右指针，用来探测两边的深度
  let left = root.left;
  let right = root.right;

  // 注意：既然进来了，说明当前节点存在，所以深度初始值为 1
  let leftDepth = 1;
  let rightDepth = 1;

  // 一直向左钻到底，求最左侧的深度
  while (left !== null) {
    left = left.left;
    leftDepth++;
  }

  // 一直向右钻到底，求最右侧的深度
  while (right !== null) {
    right = right.right;
    rightDepth++;
  }

  // 核心逻辑：如果左右深度相同，说明是一棵完美的“满二叉树”
  if (leftDepth === rightDepth) {
    // 满二叉树节点数公式：2^depth - 1
    // JavaScript 中可以使用 2 ** depth，或者位运算 (1 << depth) - 1
    return 2 ** leftDepth - 1;
  }

  // 如果不相同，说明最后一层没满。按普通二叉树的规则继续递归
  return 1 + countNodes(root.left) + countNodes(root.right);
};
