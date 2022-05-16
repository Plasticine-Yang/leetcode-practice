/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
  let sum = 0;
  for (let i = 0; i < stones.length; i++) {
    sum += stones[i];
  }

  // 背包容量为石头重量总和的一半
  const bagWeight = Math.floor(sum / 2);
  const dp: number[] = new Array(bagWeight + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = bagWeight; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  // 有一半的石头重量总和为 dp[bagWeight] 那么剩下的一半为
  // sum - dp[bagWeight] ，碰撞后剩下的重量为 sum - dp[bagWeight] - dp[bagWeight]
  return sum - dp[bagWeight] - dp[bagWeight];
}
// @lc code=end
