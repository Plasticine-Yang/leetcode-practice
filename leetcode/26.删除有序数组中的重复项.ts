/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start

/**
 * @description 双指针
 *
 * nums[slow] !== nums[fast] -> nums[++slow] = nums[fast]
 */
function removeDuplicates(nums: number[]): number {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      nums[++slow] = nums[fast];
    }
  }

  return slow + 1;
}
// @lc code=end
