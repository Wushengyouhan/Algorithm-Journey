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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  if (root === null) return res;

  // 辅助函数 dfs：node 是当前节点，path 是走到当前节点前的路径字符串
  const dfs = function (node, path) {
    // 1. 终止条件：如果是叶子节点，把当前值加上去，放入结果数组，并结束当前分支
    if (node.left === null && node.right === null) {
      res.push(path + node.val);
      return;
    }

    // 2. 单层逻辑：如果不是叶子节点，就拼上箭头 "->"
    let currentPath = path + node.val + '->';

    // 3. 递归：带着更新后的路径，继续往下走（注意判空）
    if (node.left !== null) {
      dfs(node.left, currentPath);
    }
    if (node.right !== null) {
      dfs(node.right, currentPath);
    }
  };

  // 从根节点出发，初始路径为空字符串
  dfs(root, '');

  return res;
};
