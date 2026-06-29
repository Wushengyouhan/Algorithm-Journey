/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 提前用哈希表把中序遍历的值和索引存起来，省去后续每次用 indexOf 查找的时间
  const inMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inMap.set(inorder[i], i);
  }

  // 辅助函数：通过传递下标来划定当前处理的数组范围
  const build = function (inStart, inEnd, postStart, postEnd) {
    // 1. 递归终止条件：如果左边界大于右边界，说明数组为空，没有节点了
    if (inStart > inEnd || postStart > postEnd) {
      return null;
    }

    // 2. 找根节点：后序数组的最后一个元素就是根
    const rootVal = postorder[postEnd];
    const root = new TreeNode(rootVal);

    // 3. 找切割点：从 Map 中瞬间查出根节点在中序数组里的位置
    const rootIndex = inMap.get(rootVal);

    // 4. 计算左子树的节点个数（非常关键的桥梁）
    const leftSize = rootIndex - inStart;

    // 5. 递归构造左右子树（严格对齐下标计算公式）
    root.left = build(
      inStart,
      rootIndex - 1, // 左中序的范围
      postStart,
      postStart + leftSize - 1 // 左后序的范围
    );

    root.right = build(
      rootIndex + 1,
      inEnd, // 右中序的范围
      postStart + leftSize,
      postEnd - 1 // 右后序的范围
    );

    return root;
  };

  // 初始调用，传入完整的数组索引范围
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
