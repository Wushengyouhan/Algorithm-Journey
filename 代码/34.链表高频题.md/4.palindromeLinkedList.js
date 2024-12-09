/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  //slow最终到达的就是链表的中点
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //a -> b -> c -> b -> a
  //现在中点就是slow，从中点开始往后的节点逆序
  let pre = slow;
  let cur = pre.next;
  let next = null;
  //把重点的next指向空
  pre.next = null;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  //上面的过程已经把链表调整成从左右两侧往中间指
  //a -> b -> c <- b <- a(pre)

  let ans = true;
  let left = head;
  let right = pre;
  //left往右、right往左，每一步比对值是否一样，如果某一步不一样答案就是false
  while (left !== null && right !== null) {
    if (left.val !== right.val) {
      ans = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  //还原链表
  cur = pre.next;
  //尾节点的next置空
  pre.next = null;
  next = null;
  //注意这里的终止条件,cur到了中点还要做一次
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return ans;
};
