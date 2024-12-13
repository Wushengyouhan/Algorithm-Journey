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
 * @return {boolean}
 */
const MAXN = 101;
const queue = new Array(MAXN);
let l, r;

var isCompleteTree = function (root) {
  if (!root) return true;
  l = r = 0;
  queue[r++] = root;
  // 标志是否出现非全节点
  let leaf = false;
  while (l < r) {
    let cur = queue[l++];
    // 有右无左
    // 出现非全节点后，后面都要为叶子节点
    if ((!cur.left && cur.right) || (leaf && (cur.left || cur.right))) {
      return false;
    }

    if (cur.left) {
      queue[r++] = cur.left;
    }

    if (cur.right) {
      queue[r++] = cur.right;
    }

    // 节点是否是非全节点
    if (!cur.left || !cur.right) {
      leaf = true;
    }
  }

  return true;
};
