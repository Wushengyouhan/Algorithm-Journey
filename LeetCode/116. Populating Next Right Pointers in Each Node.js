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

      // 核心逻辑：如果不是该层最后一个节点，指向队列头部（即右侧相邻节点）
      if (i < size - 1) {
        node.next = queue[0];
      }

      // 完美二叉树：有左必有右，将下一层节点入队
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return root; // 注意：题目要求返回修改后的原二叉树根节点
};
