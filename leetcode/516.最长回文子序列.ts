/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start

/**
 * @description 动态规划
 *
 * dp[i][j] 表示 s[i...j] 中最长回文子序列的长度为 dp[i][j]
 */
function longestPalindromeSubseq(s: string): number {
  const n = s.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // base case -- 对角线全是 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // 从下往上 从左往右 遍历
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}
// @lc code=end

const s = 'bbbab';
const ans = longestPalindromeSubseq(s);
console.log(ans);

export {};
