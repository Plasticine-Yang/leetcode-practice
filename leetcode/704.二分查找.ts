/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start

// /**
//  * @description 区间 -- []
//  */
// function search(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = left + Math.floor((right - left) / 2);
//     const num = nums[mid];

//     if (target < num) {
//       right = mid - 1;
//     } else if (target > num) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }

//   return -1;
// }

/**
 * @description 区间 -- [)
 */
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];

    if (target < num) {
      right = mid;
    } else if (target > num) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

// @lc code=end
