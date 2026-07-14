/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) { ... }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 辅助函数：通过 left 和 right 下标来划定当前处理的数组范围
  const build = function (left, right) {
    // 1. 终止条件：如果是无效区间（左指针越过了右指针），说明没节点了，返回空
    if (left > right) {
      return null;
    }

    // 2. 找中间节点：计算中间下标（防溢出写法）
    let mid = left + Math.floor((right - left) / 2);

    // 3. 用中间元素创建一个树节点，作为当前子树的根
    let root = new TreeNode(nums[mid]);

    // 4. 左半边数组丢给左指针，右半边数组丢给右指针，分别递归构建
    root.left = build(left, mid - 1);
    root.right = build(mid + 1, right);

    // 5. 把建好的树返回给上一层
    return root;
  };

  // 初始调用，传入整个数组的边界
  return build(0, nums.length - 1);
};
