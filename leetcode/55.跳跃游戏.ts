/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @description 贪心解法
 */
function canJump(nums: number[]): boolean {
  const n = nums.length;
  let farthest = 0;

  // 不应该遍历 n
  // 比如：nums = [0] 应当返回 true
  // 如果遍历 n，也就是会进入循环，遇到 0，返回 false
  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (farthest <= i) {
      // 遇到 0 的时候是无法跳跃的，卡在原地
      return false;
    }
  }

  return farthest >= n - 1;
}
// @lc code=end
