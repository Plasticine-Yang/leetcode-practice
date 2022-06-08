/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  let trackSum = 0;

  const backtrack = (start: number) => {
    // base case 1 -- 达到目标和
    if (trackSum === target) {
      res.push([...track]);
      return;
    }

    // base case 2 -- 超过目标和
    if (trackSum > target) return;

    for (let i = start; i < candidates.length; i++) {
      trackSum += candidates[i];
      track.push(candidates[i]);

      backtrack(i);

      trackSum -= candidates[i];
      track.pop();
    }
  };

  backtrack(0);

  return res;
}
// @lc code=end

const ans = combinationSum([2, 3, 6, 7], 7);
console.log(ans);

export {};
