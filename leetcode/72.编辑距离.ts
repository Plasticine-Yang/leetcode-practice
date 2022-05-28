/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// function minDistance(word1: string, word2: string): number {
//   function dp(i: number, j: number): number {
//     // base case
//     // 走完了 s1/s2 就要将 s2/s1 插入/删除 一共 j/i + 1 步
//     if (i === -1) return j + 1;
//     if (j === -1) return i + 1;

//     if (word1[i] === word2[j]) {
//       // 相同直接 skip
//       return dp(i - 1, j - 1);
//     } else {
//       // 不同则进行 增/删/改 操作
//       return Math.min(
//         // 增 -- s2 前进
//         dp(i, j - 1) + 1, // 因为进行了一次操作 所以编辑距离 +1
//         // 删 -- s1 前进
//         dp(i - 1, j) + 1,
//         // 改 -- 同时前进
//         dp(i - 1, j - 1) + 1
//       );
//     }
//   }

//   return dp(word1.length - 1, word2.length - 1);
// }

// @lc code=start
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp: number[][] = Array.from({ length: m + 1 }).map(
    () => new Array(n + 1)
  );
  // 初始化 dp -- word1 和 word2 都空时 需要编辑 0 步
  dp[0][0] = 0;
  // base case -- dp[0][x] = x, dp[x][0] = x
  for (let i = 1; i <= m; i++) {
    // word2 为空时，要将 word1 全部删除就能得到 word2 编辑了 i 次
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    // word1 为空时，要将 word2 全部添加到 word1 中 编辑了 j 次
    dp[0][j] = j;
  }

  // 自底向上遍历求解
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等 -- 直接 skip
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 增/删/改
        dp[i][j] = Math.min(
          // 增
          dp[i][j - 1] + 1,
          // 删
          dp[i - 1][j] + 1,
          // 改
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
}
// @lc code=end

const res = minDistance('dinitrophenylhydrazine', 'rosbenzalphenylhydrazone');
// const res = minDistance('horse', 'ros');
console.log(res);

export {};
