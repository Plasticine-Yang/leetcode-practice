/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  // dp[i] -- i 整数拆分的最大乘积
  const dp: number[] = new Array(n + 1).fill(0); // dp[10] 需要 11 个 dp

  // dp 初始化 -- dp[2] = 1
  dp[2] = 1;

  // 遍历顺序 -- 从前往后遍历
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 状态转移方程
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }

  return dp[n];
}
// @lc code=end

const res = integerBreak(10);
console.log(res);
