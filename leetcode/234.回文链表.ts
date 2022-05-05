/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  // 找到中点然后反转链表进行比较
  const mid = findMid(head);
  let p1 = head;
  let p2 = reverse(mid);

  while (p2 !== null) {
    if (p1!.val !== p2.val) return false;
    p1 = p1!.next;
    p2 = p2.next;
  }

  return true;
}

function findMid(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverse(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return last;
}
// @lc code=end
