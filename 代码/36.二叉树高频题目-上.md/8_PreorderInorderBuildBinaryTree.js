/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (
    preorder === null ||
    inorder === null ||
    preorder.length !== inorder.length
  ) {
    return null;
  }

  // 记录中序中每个节点的索引
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return helper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    map
  );
};

function helper(preorder, l1, r1, inorder, l2, r2, map) {
  if (l1 > r1) {
    return null;
  }
  // 创建根节点
  const root = new TreeNode(preorder[l1]);

  // 只有1个节点
  if (l1 === r1) {
    return root;
  }

  // 找节点在中序列表的位置
  let k = map.get(preorder[l1]);

  // pre : l1(........)[.......r1]
  // in  : (l2......)k[........r2]
  // (...)是左树对应，[...]是右树的对应
  root.left = helper(preorder, l1 + 1, l1 + k - l2, inorder, l2, k - 1, map);
  root.right = helper(preorder, l1 + k - l2 + 1, r1, inorder, k + 1, r2, map);

  return root;
}
