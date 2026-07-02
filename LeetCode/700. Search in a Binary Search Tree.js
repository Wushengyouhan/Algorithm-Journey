/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) { ... }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 1. 终止条件：如果是空树，或者刚好找到了这个节点，直接返回
  if (root === null || root.val === val) {
    return root;
  }

  // 2. 如果目标值比当前节点小，顺着左边找，并把找到的结果返回上去
  if (val < root.val) {
    return searchBST(root.left, val);
  }

  // 3. 如果目标值比当前节点大，顺着右边找，并把找到的结果返回上去
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};
