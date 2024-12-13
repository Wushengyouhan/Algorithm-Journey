/**
 * Definition for a binary tree nodea.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const builder = [];
  f(root, builder);
  return builder.join(",");
};

// 序列化
function f(root, builder) {
  if (!root) {
    builder.push("#");
  } else {
    builder.push(root.val.toString());
    f(root.left, builder);
    f(root.right, builder);
  }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// 当前数组消费到哪了
let cnt = 0;
var deserialize = function (data) {
  let vals = data.split(",");
  cnt = 0;
  return g(vals);
};

// 反序列化
function g(vals) {
  let cur = vals[cnt++];
  if (cur === "#") {
    return null;
  } else {
    let head = new TreeNode(parseInt(cur));
    head.left = g(vals);
    head.right = g(vals);
    return head;
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
