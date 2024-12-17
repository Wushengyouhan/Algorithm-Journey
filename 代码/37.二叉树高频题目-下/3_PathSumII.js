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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  // 保存满足条件的path
  const ans = [];
  if (root) {
    // 记录当前path
    const path = [];
    findPath(root, targetSum, 0, path, ans);
  }
  return ans;
};

function findPath(cur, targetSum, sum, path, ans) {
  if (!cur.left && !cur.right) {
    // 叶节点
    if (cur.val + sum === targetSum) {
      path.push(cur.val);
      ans.push([...path]);
      // 这个点探索完成
      path.pop();
    }
  } else {
    // 不是叶节点
    path.push(cur.val);

    // 递归左子树
    if (cur.left) {
      findPath(cur.left, targetSum, sum + cur.val, path, ans);
    }

    // 递归右子树
    if (cur.right) {
      findPath(cur.right, targetSum, sum + cur.val, path, ans);
    }

    path.pop();
  }
}
