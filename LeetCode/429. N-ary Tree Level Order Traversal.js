/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const size = queue.length;
    const levleArr = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levleArr.push(node.val);
      for (let child of node.children) {
        queue.push(child);
      }
    }
    res.push(levleArr);
  }
  return res;
};
