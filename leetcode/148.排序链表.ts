/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 合并两个链表 在合并的同时进行排序
 * @param head1 链表 1 的头结点 -- 已经排序好的链表
 * @param head2 链表 2 的头结点 -- 已经排序好的链表
 */
function merge(
  head1: ListNode | null,
  head2: ListNode | null
): ListNode | null {
  // 虚拟头结点 用于尾插排序
  const dummyHead = new ListNode(0);
  let p = dummyHead;
  let p1 = head1;
  let p2 = head2;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }

    p = p.next;
  }

  if (p1) {
    p.next = p1;
  } else if (p2) {
    p.next = p2;
  } else {
    p.next = null;
  }

  return dummyHead.next;
}

/**
 * 将链表一分为二 调用 merge 进行合并
 * @param head 链表头
 * @param tail 链表尾
 */
function toSortList(
  head: ListNode | null,
  tail: ListNode | null
): ListNode | null {
  // base case
  if (head === null) return head;
  if (head.next === tail) {
    // 将两个链表断开的关键
    head.next = null;
    return head;
  }

  // 快慢指针寻找中点
  let slow = head;
  let fast = head;

  while (fast !== tail && fast.next !== tail) {
    slow = slow.next!;
    fast = fast.next?.next!;
  }

  // slow 此时指向中点
  const mid = slow;

  return merge(toSortList(head, mid), toSortList(mid, tail));
}

function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null);
}
// @lc code=end
