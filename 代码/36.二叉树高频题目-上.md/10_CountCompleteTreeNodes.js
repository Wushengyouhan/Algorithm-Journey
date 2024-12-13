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
var countNodes = function (root) {
  if (!root) {
    return 0;
  }

  return f(root, 1, mostLeft(root, 1));
};

// cur : 当前来到的节点
// level :  当前来到的节点在第几层
// h : 整棵树的高度，不是cur这棵子树的高度
// 求 : cur这棵子树上有多少节点
function f(cur, level, h) {
  if (level === h) {
    return 1;
  }
  if (mostLeft(cur.right, level + 1) === h) {
    // 右树最左节点可以扎到最底部 => 左树是满二叉树
    return (1 << (h - level)) + f(cur.right, level + 1, h);
  } else {
    // 右树是满二叉树，高度比左边少1
    return (1 << (h - level - 1)) + f(cur.left, level + 1, h);
  }
}

// 当前节点是cur，并且它在level层
// 返回从cur开始不停往左，能扎到几层
function mostLeft(cur, level) {
  while (cur) {
    level++;
    cur = cur.left;
  }
  // 注意这里返回的level要减1
  return level - 1;
}
