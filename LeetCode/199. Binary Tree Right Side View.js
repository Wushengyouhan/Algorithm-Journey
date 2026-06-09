/**
 * function TreeNode(val, left, right) { ... }
 */
var rightSideView = function (root) {
  if (root === null) return [];

  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length; // 拍下当前层的快照（节点个数）

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 核心逻辑：如果当前遍历的是这一层的最后一个节点，将其加入结果
      if (i === size - 1) {
        res.push(node.val);
      }

      // 照常将左右孩子入队
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return res;
};
