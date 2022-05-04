/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // 1. 明确 dp 数组含义 -- dp[i] 表示爬到第 i 阶有 dp[i] 种方法
  /**
   * 2. 明确递推公式 -- dp[i] = dp[i-1] + dp[i-2]
   * 上 i-1 阶楼梯 有 dp[i-1] 种方法 站在第 i-1 阶楼梯上，再上一阶就是第 i 阶了
   * 上 i-2 阶楼梯 有 dp[i-2] 种方法 站在第 i-2 阶楼梯上，再上两阶就是第 i 阶了
   * 注意：在第 i-2 阶楼梯上时，不能一次只上 1 阶楼梯，如果只上 1 阶，就到了 i-1 阶
   *      那又和上 i-1 阶楼梯的情况重复了
   */
  /**
   * 3. 明确 dp 数组如何初始化
   *
   * dp[1] = 1 -- 直接上 1 阶
   * dp[2] = 2 -- 直接上 2 阶 or 一次上 1 阶，一共上两次
   */
  /**
   * 4. 明确遍历顺序
   *
   * 要知道第 i 阶有几种方法，需要先知道第 i-1 和 i-2 阶
   * 因此需要从前往后遍历
   */
  /**
   * 5. 举例推导 dp 数组 -- 列出前 5 项
   *
   * 1 2 3 5 8
   */
  if (n <= 2) return n;

  let dp1 = 1;
  let dp2 = 2;

  for (let i = 3; i <= n; i++) {
    // dp3 = dp2 + dp1
    // dp4 = dp3 + dp2 => dp2 -> dp3 | dp1 -> dp2
    const sum = dp1 + dp2;
    dp1 = dp2;
    dp2 = sum;
  }

  return dp2;
}
// @lc code=end

const res = climbStairs(30);
console.log(res);
