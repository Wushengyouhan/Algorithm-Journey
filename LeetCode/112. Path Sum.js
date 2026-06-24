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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 1. 空树，肯定找不到路径
  if (root === null) return false;

  // 2. 走到叶子节点了，核心判断：剩下的目标值刚好等于当前叶子的值吗？
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  // 3. 没走到叶子，继续让左右子树去寻找。
  // 注意：传给下一层的目标值必须扣除当前节点的值
  let leftResult = hasPathSum(root.left, targetSum - root.val);
  let rightResult = hasPathSum(root.right, targetSum - root.val);

  // 左右两边只要有一边找到了，就返回 true
  return leftResult || rightResult;
};
