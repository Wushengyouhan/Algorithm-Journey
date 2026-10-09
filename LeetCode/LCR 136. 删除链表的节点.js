/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // 1. 创建虚拟头节点，指向真实的头节点
  const dummy = new ListNode(-1);
  dummy.next = head;

  // 2. 指针从 dummy 开始往后找
  let curr = dummy;

  // 当 curr 有下一个节点时，持续遍历
  while (curr.next !== null) {
    // 如果发现下一个节点就是要删除的目标
    if (curr.next.val === val) {
      // 直接越过目标节点，将其从链表中抠除
      curr.next = curr.next.next;
      // 题目保证值互不相同，删完一个就可以直接结束了
      break;
    }

    // 如果不是目标，指针继续往下走
    curr = curr.next;
  }

  // 3. 返回真实的头节点
  return dummy.next;
};
