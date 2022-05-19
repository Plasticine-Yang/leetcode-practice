/*
 * @lc app=leetcode.cn id=1288 lang=typescript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
function removeCoveredIntervals(intervals: number[][]): number {
  // 1. 将区间按起点升序排序 起点相同时按终点降序排序
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      // 起点相同时按照终点降序排序
      return b[1] - a[1];
    }

    // 按起点升序排序
    return a[0] - b[0];
  });

  // 2. 遍历所有区间 以第一个区间的起点和终点为标准 后续不断根据情况更改起点和终点
  let res = 0;
  let left = intervals[0][0];
  let right = intervals[0][1];
  // 遍历时要从第一个元素开始 因为第 0 个已经作为初始值了 不需要遍历
  for (const [start, end] of intervals.slice(1)) {
    // 2.1 覆盖区间
    if (start >= left && end <= right) {
      res++;
    }
    // 2.2 有交集
    if (start <= right && end > right) {
      // 合并区间 -- 更新终点
      right = end;
    }
    // 2.3 无交集
    if (start > right) {
      // 更新区间 -- 以 start 和 end 作为新的起点和终点
      left = start;
      right = end;
    }
  }

  return intervals.length - res;
}
// @lc code=end

const res = removeCoveredIntervals([
  [1, 4],
  [3, 6],
  [2, 8],
]);

console.log(res);
