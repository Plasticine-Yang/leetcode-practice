/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  const backtrack = (start: number) => {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      // 剪枝 -- 对于重复的元素直接剪枝 不需要遍历那一条分支
      if (i > start && nums[i] === nums[i - 1]) continue;

      track.push(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  };

  // 先将 nums 升序排序 让相同值的元素靠在一起
  nums.sort((a, b) => a - b);
  backtrack(0);

  return res;
}
// @lc code=end

const ans = subsetsWithDup([1, 2, 2]);
console.log(ans);

export {};
