/**
 * Definition for a binary tree node.
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

const MAXN = 10001;
const queue = new Array(MAXN);
let l, r;
var serialize = function (root) {
  let builder = [];
  if (root) {
    // 根节点加入序列
    builder.push(root.val);
    l = 0;
    r = 0;
    // 根节点入队
    queue[r++] = root;

    while (l < r) {
      root = queue[l++];

      if (root.left) {
        // 左节点不为空，就序列化，并且入队
        builder.push(root.left.val);
        queue[r++] = root.left;
      } else {
        // 左节点为空, 就只用 # 序列化占位
        builder.push("#");
      }

      if (root.right) {
        builder.push(root.right.val);
        queue[r++] = root.right;
      } else {
        builder.push("#");
      }
    }
  }

  return builder.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") {
    return null;
  }
  // 节点序列
  let nodes = data.split(",");
  let index = 0;
  // 生成根节点
  let root = generate(nodes[index++]);
  l = 0;
  r = 0;
  queue[r++] = root;

  while (l < r) {
    // 出队
    let cur = queue[l++];
    // 生成左右孩子的节点
    cur.left = generate(nodes[index++]);
    cur.right = generate(nodes[index++]);
    // 非空就入队
    if (cur.left) {
      queue[r++] = cur.left;
    }
    if (cur.right) {
      queue[r++] = cur.right;
    }
  }

  return root;
};

// 生成节点
function generate(val) {
  return val === "#" ? null : new TreeNode(parseInt(val));
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
