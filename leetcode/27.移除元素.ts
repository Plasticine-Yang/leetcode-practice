/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 找出左边等于 val
    while (left <= right && nums[left] !== val) {
      left++;
    }

    // 找出右边不等于 val
    while (left <= right && nums[right] === val) {
      right--;
    }

    // 用右边的非 val 值替换左边的 val 值
    if (left < right) {
      nums[left++] = nums[right--];
    }
  }

  return left;
}
// @lc code=end
