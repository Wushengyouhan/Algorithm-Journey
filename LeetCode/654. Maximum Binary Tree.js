/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 辅助函数：通过 left 和 right 限定当前查找的数组范围
  const build = function (left, right) {
    // 1. 终止条件：如果是无效区间（没有元素），返回 null
    if (left > right) {
      return null;
    }

    // 2. 在 [left, right] 区间内找到最大值及其下标
    let maxIndex = left; // 假设第一个就是最大的
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i; // 更新最大值的下标
      }
    }

    // 3. 用找到的最大值构造当前根节点
    const root = new TreeNode(nums[maxIndex]);

    // 4. 用 maxIndex 切分左右两半，递归构造子树
    root.left = build(left, maxIndex - 1);
    root.right = build(maxIndex + 1, right);

    return root;
  };

  // 初始调用：范围是整个数组 [0, nums.length - 1]
  return build(0, nums.length - 1);
};
