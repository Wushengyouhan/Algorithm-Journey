// 迭代法中序遍历
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

const MAXN = 10001;
const stack = new Array(MAXN);

var isValidBST = function (root) {
  if (!root) {
    return true;
  }
  let pre = null;
  // r指向待插入的位置，代表栈的大小
  let r = 0;

  while (r > 0 || root) {
    if (root) {
      stack[r++] = root;
      root = root.left;
    } else {
      // 取的时候要先--
      root = stack[--r];
      if (pre && pre.val >= root.val) {
        return false;
      }
      pre = root;
      root = root.right;
    }
  }

  return true;
};
