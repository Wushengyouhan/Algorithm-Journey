/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 1. 设立虚拟头节点，统一头节点的删除逻辑
  const dummy = new ListNode(-1, head);

  // 2. curr 指针从 dummy 开始，负责探路和修改 next 指向
  let curr = dummy;

  // 3. 只要 curr 后面还有节点，就继续检查
  while (curr.next !== null) {
    // 如果下一个节点就是要删除的节点
    if (curr.next.val === val) {
      // [执行删除]：让 curr 跳过下一个节点，直接连上下下个
      curr.next = curr.next.next;

      // ⚠️ 关键点：不要写 curr = curr.next！
      // 因为新连上的 curr.next 依然可能等于 val，必须留在原地继续检查
    } else {
      // 如果安全，curr 才往后移动一步
      curr = curr.next;
    }
  }

  // 4. 返回删除后的新头节点
  return dummy.next;
};
