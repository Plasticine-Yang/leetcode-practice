/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    let curSum = 0;

    for (let j = 0; j <= i; j++) {
      curSum += nums[j];
    }

    res[i] = curSum;
  }

  return res;
}
// @lc code=end
