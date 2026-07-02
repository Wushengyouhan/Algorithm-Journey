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
var isValidBST = function (root) {
  // 必须要用极小值初始化（因为测试用例里可能有极为负的节点值）
  // JavaScript 中的最小安全数字，或者直接用 -Infinity
  let preVal = -Infinity;

  // 辅助函数：中序遍历
  const inorder = function (node) {
    // 1. 终止条件：空树也是合法的 BST
    if (node === null) return true;

    // 2. 左：遍历左子树。如果左子树里已经发现了不合法的，直接一路返回 false
    let leftValid = inorder(node.left);
    if (!leftValid) return false;

    // 3. 中：处理当前节点。当前节点必须严格大于前一个节点的值
    if (node.val <= preVal) {
      return false; // 递增顺序被打破！
    }
    preVal = node.val; // 更新“前一个节点”的值，为下一次比较做准备

    // 4. 右：遍历右子树。并返回右子树的合法性
    let rightValid = inorder(node.right);

    return rightValid;
  };

  return inorder(root);
};
