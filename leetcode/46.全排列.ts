/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  backtrack(nums, track, res);

  return res;
}

function backtrack(nums: number[], track: number[], res: number[][]) {
  if (track.length === nums.length) {
    // 路径已经完整了 可以加入到结果中
    res.push([...track]); // 要拷贝 track 数组 否则放入的只是引用 会被下一次回溯修改
    return;
  }

  // 回溯算法框架
  for (const num of nums) {
    // 排除不合法选择
    if (track.includes(num)) continue;

    // 做选择
    track.push(num);
    // 回溯
    backtrack(nums, track, res);
    // 撤销选择
    track.pop();
  }
}
// @lc code=end
export {};
