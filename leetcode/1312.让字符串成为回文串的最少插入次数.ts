/*
 * @lc app=leetcode.cn id=1312 lang=typescript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start

/**
 * @description 动态规划
 * dp[i][j]: 让 s[i...j] 变成回文串的最少操作次数
 */
function minInsertions(s: string): number {
  const n = s.length;

  // dp 初始化为 0 已经包含了 base case
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        // 等于的话不需要进行插入操作
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        // 不相等时判断往哪边插入会得到最小的插入次数的回文串
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][n - 1];
}
// @lc code=end

// const s = 'zzazz';
// const s = 'leetcode';
const s = 'mbadm';
const ans = minInsertions(s);
console.log(ans);

export {};
