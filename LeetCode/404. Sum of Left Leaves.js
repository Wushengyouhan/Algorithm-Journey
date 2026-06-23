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
var sumOfLeftLeaves = function (root) {
  // 1. 终止条件：空节点没东西可加
  if (root === null) return 0;

  let leftSum = 0;

  // 2. 核心逻辑：如果在当前节点发现了“左叶子”
  if (root.left !== null && root.left.left === null && root.left.right === null) {
    leftSum = root.left.val; // 直接拿值，停止对左子树的递归探测（提前剪枝，很棒的优化！）
  } else {
    // 否则说明左子树还没到底，递归进去继续找
    leftSum = sumOfLeftLeaves(root.left);
  }

  // 3. 右子树不管长什么样，里面都有可能藏着左叶子，必须老老实实递归
  let rightSum = sumOfLeftLeaves(root.right);

  // 4. 把左边找到的汇总值 + 右边找到的汇总值返回
  return leftSum + rightSum;
};
