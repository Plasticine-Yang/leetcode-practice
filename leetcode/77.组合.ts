/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (n: number, k: number, startIndex: number): void => {
    // base case
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      // 做选择
      path.push(i);
      // 进入下一层
      backtrack(n, k, i + 1);
      // 撤销选择
      path.pop();
    }
  };

  backtrack(n, k, 1);

  return res;
}
// @lc code=end

const ans = combine(4, 2);
console.log(ans);

export {};
