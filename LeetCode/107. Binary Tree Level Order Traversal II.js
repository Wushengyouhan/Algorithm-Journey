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
var levelOrderBottom = function (root) {
  if (root === null) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const size = queue.length;
    const layer = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      layer.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(layer);
  }

  return res.reverse();
};

1;
