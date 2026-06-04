/**
 * function TreeNode(val, left, right) { ... }
 */
var levelOrder = function (root) {
  // 坑1：必须优先处理空树
  if (root === null) return [];

  const res = [];
  const queue = [root]; // 初始化队列，放入根节点

  while (queue.length > 0) {
    // 核心技巧：提前记录当前层的节点数
    const size = queue.length;
    // 用于存放当前层的节点值
    const levelList = [];

    // 遍历当前层的所有节点
    for (let i = 0; i < size; i++) {
      // 节点出队
      const node = queue.shift();
      levelList.push(node.val);

      // 坑2：只有孩子不为空时，才放入队列
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    // 将当前层的数组加入最终结果中
    res.push(levelList);
  }

  return res;
};
