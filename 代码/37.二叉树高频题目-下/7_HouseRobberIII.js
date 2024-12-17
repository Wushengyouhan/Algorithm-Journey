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

var rob = function (root) {
  const result = dfs(root);
  return Math.max(result.yes, result.no);
};

// 返回一个对象，包括偷或不偷的最大收益
function dfs(root) {
  // 空节点情况
  if (!root) {
    return { yes: 0, no: 0 };
  }

  let left = dfs(root.left);
  let right = dfs(root.right);

  // 偷当前节点
  // 不能偷子节点
  const yes = root.val + left.no + right.no;

  // 不偷当前节点
  // 可以选择偷或不偷子节点
  const no = Math.max(left.yes, left.no) + Math.max(right.yes, right.no);

  return { yes, no };
}
