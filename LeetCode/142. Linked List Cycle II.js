/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  // 第一阶段：寻找相遇点
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // 如果相遇，说明有环
    if (slow === fast) {
      // 第二阶段：寻找入口
      let index1 = head; // 从头出发
      let index2 = fast; // 从相遇点出发

      while (index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
      }
      return index1; // 返回入口节点
    }
  }

  return null; // 无环
};
