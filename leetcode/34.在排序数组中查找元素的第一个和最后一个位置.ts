/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

/**
 * @description 相等时分别收缩左右两侧边界 直到触发边界条件退出
 */
function searchRange(nums: number[], target: number): number[] {
  return [leftBound(nums, target), rightBound(nums, target)];
}

/**
 * @description 获取左侧边界 -- 要收缩右侧边界
 */
function leftBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];

    if (target < num) {
      right = mid - 1;
    } else if (target > num) {
      left = mid + 1;
    } else {
      // 收缩右侧边界
      right = mid - 1;
    }
  }

  // 边界条件 -- 左侧边界越界 or 左侧边界不等于 target
  if (left >= nums.length || nums[left] !== target) return -1;

  return left;
}

/**
 * @description 获取右侧边界 -- 要收缩左侧边界
 */
function rightBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];

    if (target < num) {
      right = mid - 1;
    } else if (target > num) {
      left = mid + 1;
    } else {
      // 收缩左侧边界
      left = mid + 1;
    }
  }

  // 边界条件 -- 右侧边界越界 or 右侧边界值不等于 target
  if (right < 0 || nums[right] !== target) return -1;

  return right;
}
// @lc code=end
