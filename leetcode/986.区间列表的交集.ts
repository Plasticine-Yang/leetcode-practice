/*
 * @lc app=leetcode.cn id=986 lang=typescript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  let i = 0;
  let j = 0;
  const res: number[][] = [];

  while (i < firstList.length && j < secondList.length) {
    const [a1, a2] = firstList[i];
    const [b1, b2] = secondList[j];

    // 有交集
    if (a2 >= b1 && b2 >= a1) {
      // 取交集存入 res
      res.push([Math.max(a1, b1), Math.min(a2, b2)]);
    }

    // 无交集 -- 指针前进
    if (b2 > a2) i++;
    else j++;
  }

  return res;
}
// @lc code=end

const res = intervalIntersection(
  [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ],
  [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ]
);

console.log(res);
