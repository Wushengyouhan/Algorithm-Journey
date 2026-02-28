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
var minCameraCover = function (root) {
  let result = 0; // 记录摄像头数量

  // 状态常量
  const UNCOVERED = 0;
  const COVERED = 1;
  const CAMERA = 2;

  const traversal = node => {
    // 1. 空节点：不需要监控，视为"已覆盖"，不干扰父节点决策
    if (!node) return COVERED;

    // 后序遍历：左右根
    const left = traversal(node.left);
    const right = traversal(node.right);

    // 逻辑 1: 有孩子没被覆盖，老爸必须装监控救他
    if (left === UNCOVERED || right === UNCOVERED) {
      result++;
      return CAMERA;
    }

    // 逻辑 2: 有孩子装了监控，那我就被覆盖了
    if (left === CAMERA || right === CAMERA) {
      return COVERED;
    }

    // 逻辑 3: 孩子们都安全(但没装监控)，那我就是光杆司令(未覆盖)
    // 我把"未覆盖"的状态传给我的父节点，让他来救我
    return UNCOVERED;
  };

  // 【天坑】：检查根节点
  // 如果根节点最后返回 0 (未覆盖)，因为它没有父节点了，必须自己装一个
  if (traversal(root) === UNCOVERED) {
    result++;
  }

  return result;
};
