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
var isBalanced = function (root) {
  // 辅助函数：求节点的高度。如果不平衡，直接返回 -1
  const getHeight = function (node) {
    // 1. 递归终止条件：空节点高度为 0
    if (node === null) return 0;

    // 2. 左：获取左子树的高度
    let leftHeight = getHeight(node.left);
    // 如果左子树已经报警返回 -1，说明底下已经不平衡了，直接往上抛 -1
    if (leftHeight === -1) return -1;

    // 3. 右：获取右子树的高度
    let rightHeight = getHeight(node.right);
    // 如果右子树不平衡，同样直接往上抛 -1
    if (rightHeight === -1) return -1;

    // 4. 中：处理当前节点，判断左右高度差
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1; // 左右高度差大于 1，不平衡，返回报警信号 -1
    }

    // 如果一切正常，返回当前节点真实的高度
    return 1 + Math.max(leftHeight, rightHeight);
  };

  // 主函数：只要整棵树的计算结果不是 -1，它就是平衡的
  return getHeight(root) !== -1;
};
