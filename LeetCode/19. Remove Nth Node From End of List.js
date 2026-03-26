/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 1. 创建虚拟头节点，统一删除逻辑
  const dummy = new ListNode(0, head);

  // 2. 初始化双指针
  let fast = dummy;
  let slow = dummy;

  // 3. fast 先走 n 步
  // 这样 fast 和 slow 之间就隔了 n 个节点
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 4. fast 和 slow 同步走
  // 直到 fast 走到最后一个节点为止
  // 此时 slow 刚好停在待删除节点的前一个节点
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 5. 执行删除操作：跨过待删节点
  slow.next = slow.next.next;

  // 6. 返回真正的新头节点
  // 不能 return head，因为如果原 head 被删了，它就是个孤魂野鬼了
  return dummy.next;
};
