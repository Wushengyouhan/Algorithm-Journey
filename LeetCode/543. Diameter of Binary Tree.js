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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0; // 全局变量，记录最大的直径（边数）

  // 辅助递归函数：计算以 node 为根的子树的最大深度
  const getDepth = function (node) {
    if (node === null) return 0; // 空节点的深度为 0

    // 1. 递归获取左右子树的深度
    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    // 2. 暗中做点事：以当前节点为顶点的路径长度 = 左深度 + 右深度
    // 看看这条路径是不是比历史记录还长，如果是，就刷新记录
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // 3. 向上级汇报：返回当前节点的最大深度（左右子树较深的一个 + 自身这 1 层）
    return Math.max(leftDepth, rightDepth) + 1;
  };

  // 触发递归
  getDepth(root);

  return maxDiameter;
};
