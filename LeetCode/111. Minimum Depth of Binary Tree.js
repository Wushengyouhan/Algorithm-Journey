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
var minDepth = function (root) {
  if (root === null) return 0; // 空树的深度依然是 0

  const queue = [root];
  let depth = 0; // 💡 改变点：初始深度设为 0

  while (queue.length > 0) {
    const size = queue.length;

    // 💡 改变点：一旦发现队列里有货，说明有新的一层，深度先 +1
    depth++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 遇到叶子节点，直接返回当前的深度
      if (node.left === null && node.right === null) {
        return depth;
      }

      // 照常将非空孩子入队
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return depth;
};
