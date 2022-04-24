/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 暴力遍历
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === target) return [i, j];
//     }
//   }

//   return [-1, -1];
// }

// 哈希表优化
function twoSum(nums: number[], target: number): number[] {
  // 0 --> 2
  // 1 --> 7
  // 2 --> 11
  // 3 --> 15

  // 9 - 2 === 7 --> 1
  // return [0, 1]

  // 初始化哈希表 value --> index
  const memo = new Map();
  for (let i = 0; i < nums.length; i++) {
    memo.set(nums[i], i);
  }

  // 遍历数组寻找是否有 target - nums[i] 的 key 存在于 memo 中
  for (let i = 0; i < nums.length; i++) {
    const self = nums[i];
    const other = target - self;

    // other 存在 且 不是自己(要用下标来区分) -- 找到答案
    if (memo.has(other) && memo.get(other) !== i) return [i, memo.get(other)];
  }

  return [-1, -1];
}
// @lc code=end

const res = twoSum([3, 3], 6);
console.log(res);
