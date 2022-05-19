/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  // 1. 区间按起点升序排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 2. 遍历区间
  const res: number[][] = [intervals[0]];

  for (const [start, end] of intervals) {
    // 取出 res 中最后一个区间
    const last = res.slice(-1)[0];
    if (start <= last[1]) {
      // 有相交 -- 找到最大的 end
      last[1] = Math.max(last[1], end);
    } else {
      // 没有相交 是新的区间
      res.push([start, end]);
    }
  }

  return res;
}
// @lc code=end

const res = merge([
  [1, 4],
  [4, 5],
]);
console.log(res);
