/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

/**
 * @description 二维 dp 数组版本
 */
// function canPartition(nums: number[]): boolean {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   // 总和为奇数的话无论如何都无法划分成两个等和子集
//   if (sum % 2 !== 0) return false;
//   // 背包容量为数组元素总和的一半
//   const bagWeight = Math.floor(sum / 2);

//   const dp: number[][] = Array.from({ length: nums.length }).map(() =>
//     new Array(bagWeight + 1).fill(0)
//   );

//   for (let i = 1; i < nums.length; i++) {
//     // 遍历物品
//     for (let j = 1; j <= bagWeight; j++) {
//       // 遍历容量
//       if (nums[i] > j) {
//         // 超过背包容量 -- 不放入
//         dp[i][j] = dp[i - 1][j];
//       } else {
//         // 可以放入
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
//       }
//     }
//   }

//   // 可以划分成两个等和子集时 背包中的价值一定是等于背包容量的
//   if (dp[nums.length - 1][bagWeight] === bagWeight) return true;

//   return false;
// }

// @lc code=start

/**
 * @description 一维 dp 数组版本
 */
function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false;
  const bagWeight = Math.floor(sum / 2);

  const dp: number[] = new Array(bagWeight + 1).fill(0);

  for (let i = 1; i < nums.length; i++) {
    // 遍历物品
    for (let j = bagWeight; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  if (dp[bagWeight] === bagWeight) return true;

  return false;
}

// @lc code=end
