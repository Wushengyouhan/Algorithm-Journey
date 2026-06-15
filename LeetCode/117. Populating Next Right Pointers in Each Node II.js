/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (root === null) return null;

  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length; // 拍下当前层的快照（节点个数）

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 核心逻辑：如果不是该层最后一个节点，指向队列头部
      if (i < size - 1) {
        node.next = queue[0];
      }

      // 将非空的左右节点入队（普通二叉树，必须严格判空）
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return root;
};
