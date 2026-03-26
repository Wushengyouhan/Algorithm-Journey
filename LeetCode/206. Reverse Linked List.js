/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null; // 前一个节点，初始为 null
  let curr = head; // 当前节点，初始为 head

  // 只要当前节点不为空，就继续反转
  while (curr !== null) {
    // 1. 保存下一个节点 (防止断链)
    let temp = curr.next;

    // 2. 反转指针 (核心动作)
    curr.next = prev;

    // 3. 两个指针整体向后移动一步，准备处理下一个节点
    prev = curr;
    curr = temp;
  }

  // 循环结束时，curr 变成了 null，prev 停在原链表的最后一个节点
  // 它就是反转后的新头节点
  return prev;
};
