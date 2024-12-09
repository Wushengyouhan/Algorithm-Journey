/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;
  let cur = head;
  let next = null;

  // 1 -> 2 -> 3 -> ...
  // 变成 : 1 -> 1' -> 2 -> 2' -> 3 -> 3' -> ...
  while (cur) {
    next = cur.next;
    cur.next = new _Node(cur.val);
    cur.next.next = next;
    cur = next;
  }

  cur = head;
  let copy = null;

  // 利用上面新老节点的结构关系，设置每一个新节点的random指针
  while (cur) {
    next = cur.next.next;
    copy = cur.next;
    //赋值前先看看random存不存在
    copy.random = cur.random !== null ? cur.random.next : null;
    cur = next;
  }

  let ans = head.next;
  cur = head;
  while (cur) {
    //2
    next = cur.next.next;
    //1’
    copy = cur.next;
    //1->2
    cur.next = next;
    //赋值前先看看next存不存在
    copy.next = next !== null ? next.next : null;
    cur = next;
  }

  return ans;
};
