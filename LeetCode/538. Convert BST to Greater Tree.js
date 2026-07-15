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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0; // 定义一个全局的雪球变量

  // 辅助函数：反向中序遍历（右 -> 中 -> 左）
  const traverse = function (node) {
    // 终止条件：遇到空气，返回
    if (node === null) return;

    // 1. 右：先去右子树里滚出大雪球
    traverse(node.right);

    // 2. 中：处理当前节点
    sum += node.val; // 把当前节点的值揉进雪球里
    node.val = sum; // 把变大的雪球塞回给当前节点（原地修改）

    // 3. 左：带着大雪球继续去左子树里碾压
    traverse(node.left);
  };

  // 启动滚雪球引擎
  traverse(root);

  // 返回被改造完毕的原树
  return root;
};
