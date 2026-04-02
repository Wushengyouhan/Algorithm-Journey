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
var swapPairs = function (head) {
  // 1. 创建虚拟头节点，指向 head
  let dummy = new ListNode(0, head);
  let curr = dummy;

  // 2. 只有当后面至少有两个节点时，才需要交换
  while (curr.next !== null && curr.next.next !== null) {
    let node1 = curr.next; // 第一个节点
    let node2 = curr.next.next; // 第二个节点
    let node3 = node2.next; // 第三个节点（用于防止链表断裂）

    // 3. 开始三步走交换
    curr.next = node2; // 步骤一：前驱指向 node2
    node2.next = node1; // 步骤二：node2 指向 node1
    node1.next = node3; // 步骤三：node1 指向 node3

    // 4. curr 移动两位，准备下一组交换
    // 交换后 node1 变成了这组的末尾，所以 curr 移到 node1
    curr = node1;
  }

  return dummy.next;
};
