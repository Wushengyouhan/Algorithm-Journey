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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 全局/闭包变量，记录上一个被处理的节点
  let prev = null;

  const dfs = function (node) {
    if (node === null) return;

    // 1. 递归走到最右边
    dfs(node.right);
    // 2. 递归走到左边
    dfs(node.left);

    // 3. 回到根节点，开始“反向缝合”
    // 将当前节点的右指针指向已经处理好的后缀链表头 (prev)
    node.right = prev;
    // 左指针必须置空
    node.left = null;

    // 更新 prev 为当前节点，供它的父节点/上一个遍历节点使用
    prev = node;
  };

  dfs(root);
};
