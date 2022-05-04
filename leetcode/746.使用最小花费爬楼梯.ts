/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  // 1. 明确 dp 数组的含义 -- dp[i] 表示爬到第 i 阶需要支付的最小费用
  // 2. 明确递推公式 -- dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
  // 3. 明确如何初始化 dp 数组 -- dp[0] = 0 | dp[1] = 0
  // 4. 明确遍历顺序 -- 依赖于前两项 因此从前往后遍历
  /**
   * 5. 举例 -- cost = [10, 15, 20]
   *
   * dp === [0, 0, 10, 15]
   */

  // 1. 明确 dp 数组的含义 -- dp[i] 表示爬到第 i 阶需要支付的最小费用

  // 2. 明确递推公式 -- dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

  // 3. 明确如何初始化 dp 数组 -- dp[0] = 0 | dp[1] = 0
  let dp0 = 0;
  let dp1 = 0;

  // 4. 明确遍历顺序 -- 依赖于前两项 因此从前往后遍历
  for (let i = 2; i <= cost.length; i++) {
    const dpi = Math.min(dp1 + cost[i - 1], dp0 + cost[i - 2]);
    dp0 = dp1;
    dp1 = dpi;
  }

  // 楼顶是指第 cost.length 阶 也就是 dp 数组的最后一项就是爬到楼顶的最低花费
  return dp1;
}
// @lc code=end

const res = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(res);
