/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) { ... }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // 1. 递归终止条件：遇到空气，直接返回空气
  if (root === null) return null;

  // 2. 如果当前节点太小，它连带它的左子树全部抛弃！
  // 唯独它的右子树可能还有合法的幸存者，我们去右子树里继续修剪，
  // 并把右子树修剪出来的最终合法结果，直接顶替当前节点的位置向上返回。
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  // 3. 如果当前节点太大，它连带它的右子树全部抛弃！
  // 唯独左子树可能还有救，去左子树里修剪，把修剪结果向上返回。
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  // 4. 当前节点在区间内（合法），安然无恙。
  // 但是别高兴太早，它的左胳膊和右胳膊里可能长了毒瘤，继续往下修剪。
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  // 修剪完毕，把自己这棵干干净净的树返回上去
  return root;
};
