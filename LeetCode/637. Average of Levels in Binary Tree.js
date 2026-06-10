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
var averageOfLevels = function (root) {
  if (!root) return []; // 边界情况：空树直接返回空数组

  const res = [];
  const queue = [root]; // 用数组模拟队列，初始放入根节点

  while (queue.length > 0) {
    const levelSize = queue.length; // 获取当前层的节点数量
    let levelSum = 0; // 记录当前层的节点值总和

    // 遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 队首节点出队
      levelSum += node.val;

      // 将下一层的节点加入队列的尾部
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // 计算当前层的平均值并加入结果集
    res.push(levelSum / levelSize);
  }

  return res;
};
