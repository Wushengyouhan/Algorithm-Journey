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
var findBottomLeftValue = function (root) {
  if (root === null) return 0;

  const queue = [root];
  let res = 0; // 用于记录每一层最左边的节点值

  while (queue.length > 0) {
    let size = queue.length; // 锁定当前层的节点个数

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 照常把左右孩子入队（标准的从左到右顺序）
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);

      // ⭐ 核心逻辑：记录每一层的第一个节点
      if (i === 0) {
        res = node.val;
      }
    }
  }

  return res;
};
