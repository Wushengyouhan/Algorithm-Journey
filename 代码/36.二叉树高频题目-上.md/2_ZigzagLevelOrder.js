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
let l, r;
var zigzagLevelOrder = function (root) {
  const ans = [];
  if (root) {
    l = r = 0;
    queue[r++] = root;
    // false 代表从左往右
    // true 代表从右往左
    let reverse = false;

    while (l < r) {
      let size = r - l;
      let list = [];

      // 收集
      // reverse == false, 左 -> 右， l....r-1, 收集size个
      // reverse == true,  右 -> 左， r-1....l, 收集size个
      // 左 -> 右, i = i + 1
      // 右 -> 左, i = i - 1
      for (
        let i = reverse ? r - 1 : l, j = reverse ? -1 : 1, k = 0;
        k < size;
        i += j, k++
      ) {
        let cur = queue[i];
        list.push(cur.val);
      }

      for (let i = 0; i < size; i++) {
        // 取当前节点，l++相当于该节点出队
        let cur = queue[l++];
        if (cur.left) {
          queue[r++] = cur.left;
        }
        if (cur.right) {
          queue[r++] = cur.right;
        }
      }
      // 保存该层结果
      ans.push(list);
      // 反转遍历顺序
      reverse = !reverse;
    }
  }
  return ans;
};
