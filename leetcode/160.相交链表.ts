/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pa = headA;
  let pb = headB;

  while (pa !== pb) {
    if (pa) {
      pa = pa.next;
    } else {
      pa = headB;
    }

    if (pb) {
      pb = pb.next;
    } else {
      pb = headA;
    }
  }

  // 最后 pa 和 pb 肯定会相遇
  // 若相交则会在相交结点相遇
  // 若不相交则会同时指向 null
  return pa;
}
// @lc code=end
