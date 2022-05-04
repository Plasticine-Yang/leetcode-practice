/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp: number[][] = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n);
  }

  // 初始化 dp 数组
  let hasObstacle = false; // 是否有障碍物
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      // 判断是否遇到障碍物 -- 有障碍物时将标志变量置为 true
      hasObstacle = true;
    }
    // 初始化第一列为 1
    if (!hasObstacle) dp[i][0] = 1;
    // 有障碍物时 障碍物所在格子包括之后的都是不可达的，均初始化为 0
    else dp[i][0] = 0;
  }

  hasObstacle = false; // 重置标志变量
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      // 判断是否遇到障碍物 -- 有障碍物时将标志变量置为 true
      hasObstacle = true;
    }
    // 初始化第一行为 1
    if (!hasObstacle) dp[0][j] = 1;
    // 有障碍物时 障碍物所在格子包括之后的都是不可达的，均初始化为 0
    else dp[0][j] = 0;
  }

  // 从左往右逐行遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        // 遇到障碍物 -- dp[i][j] 设置为 0 表示不可达
        dp[i][j] = 0;
      } else {
        // 无障碍物 -- 正常转移
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];
}
// @lc code=end

const res = uniquePathsWithObstacles([
  [0, 1],
  [0, 0],
]);

console.log(res);
