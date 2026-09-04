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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const map = new Map();
  map.set(0, 1);
  let res = 0;

  const dfs = (node, currSum) => {
    if (!node) return;
    currSum += node.val;

    let f = currSum - targetSum;
    if (map.has(f)) {
      res += map.get(f);
    }

    map.set(currSum, (map.get(currSum) || 0) + 1);

    dfs(node.left, currSum);
    dfs(node.right, currSum);

    map.set(currSum, map.get(currSum) - 1);
  };
  dfs(root, 0);
  return res;
};
