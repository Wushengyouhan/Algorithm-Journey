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
var maxDepth = function (root) {
  if (root === null) return 0; // 空树深度为 0

  let depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length; // 拍下当前层的快照（节点个数）
    depth++; // 进入新的一层，深度 + 1

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 照常将非空的左右孩子入队
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return depth;
};
