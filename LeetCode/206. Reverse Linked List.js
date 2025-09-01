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
var reverseList = function(head) {
    let pre = null, cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = pre; // 把 cur 插在 pre 链表的前面（头插法）
        pre = cur;
        cur = next;
    }
    return pre;
};