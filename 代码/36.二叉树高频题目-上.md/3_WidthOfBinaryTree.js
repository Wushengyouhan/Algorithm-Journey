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
const MAXN = 3001;
const nq = new Array(MAXN);
const iq = new Array(MAXN);
let l, r;

var widthOfBinaryTree = function (root) {
  let ans = 1;
  l = r = 0;
  nq[r] = root;
  iq[r++] = 1;

  while (l < r) {
    let size = r - l;
    // 本层的最大宽度: 右id - 左id + 1
    ans = Math.max(ans, iq[r - 1] - iq[l] + 1);

    // 遍历本层
    for (let i = 0; i < size; i++) {
      // 取当前节点和其id，然后出队
      let node = nq[l];
      let id = iq[l++];

      if (node.left) {
        nq[r] = node.left;
        // 防止id溢出
        iq[r++] = (id * 2) % Number.MAX_SAFE_INTEGER;
      }

      if (node.right) {
        nq[r] = node.right;
        // 防止id溢出
        iq[r++] = (id * 2 + 1) % Number.MAX_SAFE_INTEGER;
      }
    }
  }
  return ans;
};
