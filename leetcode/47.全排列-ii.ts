/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  const backtrack = () => {
    // base case
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 剪枝
      // 1. 避免 track 重复
      if (used[i]) continue;

      // 2. 避免结果重复
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      track.push(nums[i]);

      backtrack();

      used[i] = false;
      track.pop();
    }
  };

  nums.sort((a, b) => a - b);
  backtrack();

  return res;
}
// @lc code=end

const ans = permuteUnique([1, 1, 2]);
console.log(ans);

export {};
