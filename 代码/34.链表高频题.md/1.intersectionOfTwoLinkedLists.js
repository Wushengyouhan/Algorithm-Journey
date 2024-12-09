/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;
  //记录a,b链表的差值
  let diff = 0;

  while (a) {
    a = a.next;
    diff++;
  }

  while (b) {
    b = b.next;
    diff--;
  }

  //让a指向长链表
  if (diff >= 0) {
    a = headA;
    b = headB;
  } else {
    a = headB;
    b = headA;
  }

  diff = Math.abs(diff);

  //a先走diff步
  while (diff != 0) {
    a = a.next;
    diff--;
  }

  while (a != b) {
    a = a.next;
    b = b.next;
  }
  return a;
};
