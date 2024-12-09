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
// 全局变量
let start;
let end;

var sortList = function (head) {
  // 统计链表长度
  let n = 0;
  let cur = head;
  while (cur !== null) {
    n++;
    cur = cur.next;
  }

  // l1...r1 每组的左部分
  // l2...r2 每组的右部分
  // next 下一组的开头
  // lastTeamEnd 上一组的结尾
  let l1, r1, l2, r2, lastTeamEnd;

  for (let step = 1; step < n; step <<= 1) {
    // 第一组很特殊，因为要决定整个链表的头，所以单独处理
    l1 = head;
    r1 = findEnd(l1, step);
    l2 = r1.next;
    r2 = findEnd(l2, step);
    // 下一组的头
    next = r2.next;
    r1.next = null;
    r2.next = null;

    merge(l1, r1, l2, r2);
    head = start;
    lastTeamEnd = end;

    while (next != null) {
      l1 = next;
      r1 = findEnd(l1, step);
      l2 = r1.next;
      if (l2 == null) {
        lastTeamEnd.next = l1;
        break;
      }
      r2 = findEnd(l2, step);
      next = r2.next;
      r1.next = null;
      r2.next = null;
      merge(l1, r1, l2, r2);
      // 和前面一组连起来
      lastTeamEnd.next = start;
      // 为本组的最后
      lastTeamEnd = end;
    }
  }

  return head;
};

// 包括s在内，往下数k个节点返回
// 如果不够，返回最后一个数到的非空节点
function findEnd(s, k) {
  //注意要先--k
  while (--k !== 0 && s.next !== null) {
    s = s.next;
  }
  return s;
}

// l1...r1 -> null : 有序的左部分
// l2...r2 -> null : 有序的右部分
// 整体merge在一起，保证有序
// 并且把全局变量start设置为整体的头，全局变量end设置为整体的尾

function merge(l1, r1, l2, r2) {
  let pre;
  // 设置start节点
  if (l1.val <= l2.val) {
    start = l1;
    pre = l1;
    l1 = l1.next;
  } else {
    start = l2;
    pre = l2;
    l2 = l2.next;
  }

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pre.next = l1;
      pre = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      pre = l2;
      l2 = l2.next;
    }
  }

  //将剩下的链表并入进来
  if (l1) {
    pre.next = l1;
    end = r1;
  } else {
    pre.next = l2;
    end = r2;
  }
}
