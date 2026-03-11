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
 * @return {number}
 */
var rob = function (root) {
  // DFS 返回一个数组: [不偷当前节点的最大收益, 偷当前节点的最大收益]
  const dfs = node => {
    // Base Case: 空节点偷不偷都是 0
    if (!node) return [0, 0];

    // 1. 后序遍历：先要拿到左右孩子的状态报告
    const left = dfs(node.left);
    const right = dfs(node.right);

    // 2. 状态转移：如果不偷当前节点
    // 那么左右孩子随意，挑收益最大的方案即可
    const notRobCur = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

    // 3. 状态转移：如果偷当前节点
    // 那么左右孩子【绝对不能偷】
    // 收益 = 当前节点的值 + 左孩子没被偷的收益 + 右孩子没被偷的收益
    const robCur = node.val + left[0] + right[0];

    // 4. 将当前节点的状态报告给父节点
    return [notRobCur, robCur];
  };

  // 执行 DFS，拿到根节点的状态报告
  const res = dfs(root);

  // 最终答案是根节点 "偷" 或 "不偷" 中的最大值
  return Math.max(res[0], res[1]);
};
