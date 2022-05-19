/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }).map(() =>
    new Array(n + 1).fill(0)
  );

  for (const str of strs) {
    // 统计 0 和 1 的总数
    let zeroNum = 0,
      oneNum = 0;
    for (const char of str) {
      if (char === '0') zeroNum++;
      if (char === '1') oneNum++;
    }
    // dp 状态转移
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }

  return dp[m][n];
}
// @lc code=end

const res = findMaxForm(['10', '0', '1'], 1, 1);
console.log(res);
