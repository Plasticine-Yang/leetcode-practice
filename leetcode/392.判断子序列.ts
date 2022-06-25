/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start

/**
 * @description 双指针解法
 */
// function isSubsequence(s: string, t: string): boolean {
//   // 空串是任何字符串的子序列
//   if (s.length === 0) return true;

//   let i = 0;
//   let j = 0;

//   while (i < s.length && j < t.length) {
//     if (s.charAt(i) === t.charAt(j)) {
//       i++;
//       if (i === s.length) return true;
//     }
//     j++;
//   }

//   return false;
// }

/**
 * @description 动态规划
 */
function isSubsequence(s: string, t: string): boolean {
  // dp[i][j] 表示 t 中从位置 i 开始字符 t 首次出现的位置
  // t = 'ahbgdc' dp[0][0] === 0 表示 下标为 0 处开始，字符 'a' 的首次出现位置为 0
  const n = s.length;
  const m = t.length;
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(26).fill(0));

  // dp 初始化
  for (let i = 0; i < m; i++) {
    // 下标 m 处不可能有字符 将其设置成 m 表示字符不存在
    dp[m][i] = m;
  }

  // 状态转移方程:
  // 1. dp[i][j] = i ==> t[i] === j
  // 2. dp[i][j] = dp[i + 1][j] ==> t[i] !== j
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t.charCodeAt(j) === 'a'.charCodeAt(0) + j) {
        dp[i][j] = i;
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    const sChar = s.charCodeAt(i) - 'a'.charCodeAt(0);
    // s 中的字符在 t 中的 index 位置之后找不到则不是子序列
    if (dp[index][sChar] === m) return false;

    // 更新 index
    index = dp[index][sChar] + 1;
  }

  return true;
}
// @lc code=end

const ans = isSubsequence('abc', 'ahbgdc');
console.log(ans);

export {};
