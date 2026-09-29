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
  // 只要有一个链表为空，就不可能相交
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // 当 pA 和 pB 相遇时循环停止（无论是在交点相遇，还是在末尾的 null 相遇）
  while (pA !== pB) {
    // pA 如果没走到尽头就继续走；如果走到尽头了，就跳到 headB
    if (pA !== null) {
      pA = pA.next;
    } else {
      pA = headB;
    }

    // pB 如果没走到尽头就继续走；如果走到尽头了，就跳到 headA
    if (pB !== null) {
      pB = pB.next;
    } else {
      pB = headA;
    }
  }

  // 相遇点即为交点，如果不相交，此时 pA 和 pB 都是 null，返回 null 也是正确的
  return pA;
};

// 💡 装X提示：上面的 while 内部其实可以用三元表达式极简压缩成两行，但拆开写面试官看着更清晰
// pA = pA !== null ? pA.next : headB;
// pB = pB !== null ? pB.next : headA;
