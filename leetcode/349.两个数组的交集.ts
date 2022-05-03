/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  // 把 nums1 转成 set
  const nums1Set = new Set(nums1);
  const res = new Set<number>();

  // 遍历 nums2 遇到存在于 nums1Set 中则加入到结果集
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];

    if (nums1Set.has(num)) res.add(num);
  }

  return Array.from(res.values());
}
// @lc code=end

const res = intersection([1, 2, 2, 1], [2, 2]);
console.log(res);
