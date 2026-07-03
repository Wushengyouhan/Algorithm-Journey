/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) { ... }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let pre = null; // 指向上一个节点
  let count = 0; // 当前数字的出现次数
  let maxCount = 0; // 记录历史最高频率
  let res = []; // 存放结果的众数数组

  // 辅助函数：中序遍历
  const inorder = function (node) {
    if (node === null) return;

    // 1. 左
    inorder(node.left);

    // 2. 中：处理当前节点
    if (pre === null) {
      count = 1; // 第一个节点，频率为1
    } else if (pre.val === node.val) {
      count++; // 和前一个相同，频率累加
    } else {
      count = 1; // 和前一个不同，频率重置为1
    }

    // 核心逻辑：维护 maxCount 和 res 数组
    if (count === maxCount) {
      res.push(node.val); // 并列第一，加进来
    } else if (count > maxCount) {
      maxCount = count; // 刷新最高记录
      res = [node.val]; // 🚨 极度关键：清空以前的数组，因为出现了一个更强的王！
    }

    pre = node; // 💡 重点：当前节点变为下一次的“上一个节点”

    // 3. 右
    inorder(node.right);
  };

  // 开始遍历
  inorder(root);

  return res;
};
