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
 * @return {number[][]}
 */
const MAXN = 2001;
const queue = new Array(MAXN);
// [l,r)是当前队列中的元素
let l, r;
var levelOrder = function (root) {
  const ans = [];
  if (root) {
    // 初始化，根节点加入队列
    l = r = 0;
    queue[r++] = root;

    // 队列里还有值
    while (l < r) {
      // 当前层有size个节点
      let size = r - l;
      const list = [];

      // 处理当前层
      for (let i = 0; i < size; i++) {
        let cur = queue[l++];
        list.push(cur.val);
        if (cur.left) {
          queue[r++] = cur.left;
        }
        if (cur.right) {
          queue[r++] = cur.right;
        }
      }
      ans.push(list);
    }
  }
  return ans;
};
