/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  const backtrack = (start: number) => {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i]);
      // 回溯
      backtrack(i + 1);
      // 撤销选择
      track.pop();
    }
  };

  backtrack(0);

  return res;
}
// @lc code=end

const ans = subsets([1, 2, 3]);
console.log(ans);

export {};
