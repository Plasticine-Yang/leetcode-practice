/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  const used: boolean[] = new Array(nums.length);

  const backtrack = () => {
    // base case
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // track 中已经存在的数字就不需要加入了
      if (used[i]) continue;

      used[i] = true;
      track.push(nums[i]);

      backtrack();

      used[i] = false;
      track.pop();
    }
  };

  backtrack();

  return res;
}

// @lc code=end

const ans = permute([1, 2, 3]);
console.log(ans);

export {};
