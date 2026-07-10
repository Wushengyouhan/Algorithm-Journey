/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) { ... }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 情况 1：没找到，直接返回空
  if (root === null) return null;

  // 如果目标在左边，去左边执行删除，然后重新接好左胳膊
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  // 如果目标在右边，去右边执行删除，然后重新接好右胳膊
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  // 命中目标！开始执行拆迁与重组逻辑
  else {
    // 情况 2：叶子节点。直接删（返回 null 告诉父亲我没了）
    if (root.left === null && root.right === null) {
      return null;
    }
    // 情况 3：只有右孩子。返回右孩子顶替自己
    else if (root.left === null && root.right !== null) {
      return root.right;
    }
    // 情况 4：只有左孩子。返回左孩子顶替自己
    else if (root.left !== null && root.right === null) {
      return root.left;
    }
    // 情况 5：左右双全，最难的一步
    else {
      // 找右子树里最左下角的节点（右子树中的最小值，我们的接盘侠）
      let curr = root.right;
      while (curr.left !== null) {
        curr = curr.left;
      }

      // 把被删节点的左子树，整个挂到接盘侠的左手边
      curr.left = root.left;

      // 返回被删节点的右子树，让它成为这块地盘的新主人
      return root.right;
    }
  }
};
