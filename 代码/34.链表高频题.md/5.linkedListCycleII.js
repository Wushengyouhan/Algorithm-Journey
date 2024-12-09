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
  if (head === null || head.next === null || head.next.next === null) {
    return null;
  }
  //这里要先走一轮，否则循环直接不满足了
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
    if (fast.next === null || fast.next.next === null) return null;
    //slow走1步
    slow = slow.next;
    //fast走两步
    fast = fast.next.next;
  }

  //相遇后fast回到起点
  fast = head;
  //再次相遇就是入口
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
