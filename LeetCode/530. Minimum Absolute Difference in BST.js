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
var getMinimumDifference = function (root) {
  let pre = null; // 用指针保存上一个被访问的节点
  let minDiff = Infinity; // 初始化最小差值为正无穷

  // 辅助函数：中序遍历
  const inorder = function (node) {
    if (node === null) return;

    // 1. 左
    inorder(node.left);

    // 2. 中：处理当前节点
    if (pre !== null) {
      // 计算当前节点与上一个节点的差值，并更新全局最小差值
      // (因为是递增的，所以直接 node.val - pre.val 一定是正数，不用加绝对值)
      minDiff = Math.min(minDiff, node.val - pre.val);
    }
    pre = node; // 💡 重点：处理完后，当前节点就成了下一个人的“上一个节点”

    // 3. 右
    inorder(node.right);
  };

  // 开始遍历
  inorder(root);

  return minDiff;
};
