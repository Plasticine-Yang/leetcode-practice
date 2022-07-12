/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @description 数学图像解法
 */
// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   const n = gas.length;
//   let sum = 0;
//   let minSum = 0;
//   let start = 0;

//   for (let i = 0; i < n; i++) {
//     sum += gas[i] - cost[i];

//     if (sum < minSum) {
//       start = i + 1;
//       minSum = sum;
//     }
//   }

//   // 总油量小于总消耗量 -- 无解
//   if (sum < 0) return -1;

//   return start === n ? 0 : start;
// }

/**
 * @description 贪心解法
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;

  // 计算总油量是否小于总消耗量
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += gas[i] - cost[i];
  }

  // 总油量小于总消耗量 -- 无解
  if (sum < 0) return -1;

  // 有解的前提下才开始求解
  let capacity = 0; // 油箱中的油量
  let start = 0; // 起点
  for (let i = 0; i < n; i++) {
    // 油箱中的油量随着前进而不断改变
    // 改变量为当前加油站能够提供的油量 - 前往下一个加油站所需要消耗的油量
    capacity += gas[i] - cost[i];

    if (capacity < 0) {
      // 无法走到第 i 点，那么 i 之前的点都不能够作为起点
      // 让 i + 1 作为起点
      start = i + 1;
      // 新的起点出发 油箱油量清空
      capacity = 0;
    }
  }

  return start === n ? 0 : start;
}
// @lc code=end
