/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start

class Counter<K = any> extends Map<K, number> {
  count(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! + 1);
    } else {
      this.set(key, 1);
    }
  }

  decrease(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! - 1);
    }
  }
}

function intersect(nums1: number[], nums2: number[]): number[] {
  // 让较小的数组作为 nums1
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const counter = new Counter<number>();
  const res: number[] = [];

  // 统计 nums1 中的字符出现次数
  for (let i = 0; i < nums1.length; i++) {
    counter.count(nums1[i]);
  }

  // nums2 中的字符如果有在 counter 中则将其加入到结果集 并让相应计数减 1
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];

    if (counter.get(num)) {
      res.push(num);
      counter.decrease(num);
    }
  }

  return res;
}
// @lc code=end

const res = intersect([1, 2], [1, 1]);
console.log(res);
