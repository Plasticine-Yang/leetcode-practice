/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  const backtrack = (start: number) => {
    // base case
    if (track.length === k) {
      res.push([...track]);
    }

    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(i + 1);
      track.pop();
    }
  };

  backtrack(1);

  return res;
}
// @lc code=end

const ans = combine(4, 2);
console.log(ans);

export {};
