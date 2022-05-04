/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n <= 1) return n;

  // 1. dp 数组 -- dp[i] 表示第 i 个数的 斐波那契数值

  // 2. 递推公式 -- dp[i] = dp[i-1] + dp[i-2]

  // 3. dp 数组初始化 dp[0] = 0 dp[1] = 1
  let dp0 = 0;
  let dp1 = 1;

  // 4. 遍历顺序 -- 从前往后
  for (let i = 2; i <= n; i++) {
    // dp2 = dp1 + dp0 = 1 + 0
    // dp3 = dp2 + dp1 = 1 + 1 => dp1 -> dp2 | dp0 -> dp1
    // dp4 = dp3 + dp2 = 2 + 1 => dp1 -> dp3 | dp0 -> dp2
    // 即把 dpi 看成 dp1 + dp0
    // dp1 每次都是 dp1 与 dp0 之和
    // dp0 则变为 dp1
    const sum = dp1 + dp0;
    dp0 = dp1;
    dp1 = sum;
  }

  return dp1;
}
// @lc code=end

const res = fib(30);
console.log(res);
