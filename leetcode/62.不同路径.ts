/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  // 1. dp[i][j] -- 到第 (i, j) 格有多少条不同的路径
  const dp: number[][] = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n);
  }

  // 2. dp[i][j] = (dp[i-1][j] + 1) + (dp[i][j-1] + 1) (i, j 不同时为 0)

  /**
   * 3. dp[0][0] = 0
   *
   *    第一行和第一列的任何格子都只有一条路径
   *    dp[0][1] = 1
   *    dp[1][0] = 1
   *
   *    常规格子
   *    dp[1][1] = dp[0][1] + dp[1][0]
   *    ...
   */

  // 第一行和第一列初始化为 1
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;

  // 4. 从左上到右下逐行遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 5. 最终返回 dp[m-1][n-1]
  return dp[m - 1][n - 1];
}
// @lc code=end

const res = uniquePaths(3, 7);
console.log(res);
