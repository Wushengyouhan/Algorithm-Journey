/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 1. 递归终止条件：越过叶子节点，或者直接遇到了 p 或 q
  if (root === null || root === p || root === q) {
    return root;
  }

  // 2. 左：去左子树里找 p 或 q
  let left = lowestCommonAncestor(root.left, p, q);

  // 3. 右：去右子树里找 p 或 q
  let right = lowestCommonAncestor(root.right, p, q);

  // 4. 中：根据左右子树汇报的结果做决策
  if (left !== null && right !== null) {
    // 如果左右两边都找到了，说明 p 和 q 分别在我的左右两边，我就是它俩的 LCA！
    return root;
  }

  // 如果左子树没找到，那就一定在右子树里（或者底下传上来的已经是 LCA 了）
  if (left === null && right !== null) return right;

  // 如果右子树没找到，那就一定在左子树里
  if (left !== null && right === null) return left;

  // 啥也没找到，返回 null
  return null;
};
