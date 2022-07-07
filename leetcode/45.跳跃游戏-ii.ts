/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @description 动态规划
 */
// function jump(nums: number[]): number {
//   const n = nums.length;
//   // 即便是从 0 一步一步跳到 n - 1 也只需要 n - 1 步
//   // 所以每一格开始跳都不可能超过 n - 1 步，也就是说不可能是 n 步
//   // 所以备忘录初始化为 n 就是每格不可能达到的值
//   const memo: number[] = new Array(n).fill(n);

//   // 定义：从索引 p 开始跳到最后一个位置的最小跳跃数
//   const dp = (p: number): number => {
//     // base case: 已经跳到最后一格 最小跳跃数为 0
//     if (p >= n - 1) {
//       return 0;
//     }

//     // 查备忘录看子问题是否已经计算过
//     if (memo[p] !== n) return memo[p];

//     // 遍历选择 -- 即 nums[p]，允许跳跃的步长列表
//     const steps = nums[p];
//     for (let i = 1; i <= steps; i++) {
//       // 穷举每一个子问题
//       const subProblem = dp(p + i);
//       // 结果存入备忘录
//       memo[p] = Math.min(memo[p], subProblem + 1);
//     }

//     return memo[p];
//   };

//   return dp(0);
// }

/**
 * @description 贪心选择
 */
function jump(nums: number[]): number {
  const n = nums.length;
  // 当前可跳跃范围的终点
  let end = 0,
    // 总共的跳跃次数
    jumps = 0,
    // 可到达的最远地方
    farthest = 0;

  // 遍历所有选择
  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    // 当前的可跳跃范围遍历结束 进入下一个可跳跃范围
    if (i === end) {
      // 每遍历完一个可跳跃范围就相当于做了一次决策
      // 总跳跃次数增加一次
      jumps++;
      // 更新下一次可跳跃范围的终点
      end = farthest;
    }
  }

  return jumps;
}
// @lc code=end
