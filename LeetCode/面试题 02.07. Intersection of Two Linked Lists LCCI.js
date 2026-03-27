/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // 当 pA !== pB 时循环继续。
  // 有两种情况会跳出循环：
  // 1. 找到了交点：pA 和 pB 指向了同一个物理节点。
  // 2. 没有交点：pA 和 pB 在第二圈走完时，同时变成了 null (null === null)。
  while (pA !== pB) {
    // 如果 pA 走到头了，就把它拉到链表 B 的头节点继续走
    pA = pA === null ? headB : pA.next;

    // 如果 pB 走到头了，就把它拉到链表 A 的头节点继续走
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
