/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 初始化窗口起始和结束位置
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }

      res = Math.min(res, right - left + 1);
    }

    right++;
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}
// @lc code=end
