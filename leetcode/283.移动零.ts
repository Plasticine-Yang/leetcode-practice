/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 将 nums 的所有 0 移除，然后从 size 开始将数组剩余部分填充 0
  const size = removeElement(nums, 0);

  // 从 size 开始填充 0
  nums.fill(0, size);
}

/**
 * @description 移除 nums 数组中所有的 val 元素
 * @param nums 数组
 * @param val 待移除的元素
 * @returns 移除 val 后数组的长度
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
}
// @lc code=end

// const nums = [0, 1, 0, 3, 12];
const nums = [1, 0];
// const nums = [1];
moveZeroes(nums);
console.log(nums);
