/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let start = head;
  let end = teamEnd(start, k);
  //节点小于k个
  if (end == null) {
    return head;
  }

  //第一组很特殊因为牵扯到换头的问题
  head = end;
  reverse(start, end);
  // 翻转之后start变成了上一组的结尾节点
  let lastTeamEnd = start;
  while (lastTeamEnd.next !== null) {
    start = lastTeamEnd.next;
    end = teamEnd(start, k);
    if (end == null) {
      return head;
    }
    reverse(start, end);
    //和前面的连上
    lastTeamEnd.next = end;
    lastTeamEnd = start;
  }
  return head;
};

// 当前组的开始节点是s，往下数k个找到当前组的结束节点返回
function teamEnd(s, k) {
  //k=3，只需要向后移动两次,所以要先--
  while (--k > 0 && s !== null) {
    s = s.next;
  }
  return s;
}

// s -> a -> b -> c -> e -> 下一组的开始节点
// 上面的链表通过如下的reverse方法调整成 : e -> c -> b -> a -> s -> 下一组的开始节点
function reverse(s, e) {
  //下一组开始的点
  e = e.next;

  let cur = s;
  let pre = null;
  let next = null;

  while (cur !== e) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  //翻转后的尾节点连上下一组的
  s.next = e;
}
