/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (const num of nums) sum += num;
  if (sum < Math.abs(target)) return 0;
  if ((sum + target) % 2 !== 0) return 0;

  const bagWeight = Math.floor((sum + target) / 2);
  const dp: number[] = new Array(bagWeight + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = bagWeight; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[bagWeight];
}
// @lc code=end
