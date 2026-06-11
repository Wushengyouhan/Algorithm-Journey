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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (root === null) return [];

  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length; // 拍下当前层的快照（节点个数）
    let levelMax = -Infinity; // 初始化当前层最大值为负无穷

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 依次出队

      // 更新当前层的最大值
      levelMax = Math.max(levelMax, node.val);

      // 照常将非空的左右孩子入队
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    // 当前层结束，将最大值推入总结果中
    res.push(levelMax);
  }

  return res;
};
