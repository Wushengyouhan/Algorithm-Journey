/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // root从上到下
  // 如果先遇到了p，说明p是答案
  // 如果先遇到了q，说明q是答案
  while (root.val !== p.val && root.val !== q.val) {
    if (
      // 如果root在p~q的值之间，不用管p和q谁大谁小，只要root在中间，那么此时的root就是答案
      root.val > Math.min(p.val, q.val) &&
      root.val < Math.max(p.val, q.val)
    ) {
      break;
    }

    // 如果root在p~q的值的左侧，那么root往右移动
    // 如果root在p~q的值的右侧，那么root往左移动
    root = root.val < Math.min(p.val, q.val) ? root.right : root.left;
  }

  return root;
};
