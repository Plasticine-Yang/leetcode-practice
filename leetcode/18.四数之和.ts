/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start

/**
 * @description 被 threeSum 复用
 */
function twoSum(nums: number[], start: number, target: number): number[][] {
  let lo = start;
  let hi = nums.length - 1;

  const res: number[][] = [];

  while (lo < hi) {
    const left = nums[lo];
    const right = nums[hi];
    const sum = left + right;

    if (sum < target) {
      while (lo < hi && nums[lo] === left) lo++;
    } else if (sum > target) {
      while (lo < hi && nums[hi] === right) hi--;
    } else {
      res.push([nums[lo], nums[hi]]);

      while (lo < hi && nums[lo] === left) lo++;
      while (lo < hi && nums[hi] === right) hi--;
    }
  }

  return res;
}

/**
 * @description 被 fourSum 复用
 */
function threeSum(nums: number[], start: number, target: number): number[][] {
  const n = nums.length;
  const res: number[][] = [];

  for (let i = start; i < n; i++) {
    const twoSumRes = twoSum(nums, i + 1, target - nums[i]);

    twoSumRes.forEach((item) => {
      item.push(nums[i]);
      res.push(item);
    });

    // 跳过重复元素
    while (i < n - 1 && nums[i] === nums[i + 1]) i++;
  }

  return res;
}

function fourSum(nums: number[], target: number): number[][] {
  // 先将数组排序
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < n; i++) {
    const threeSumRes = threeSum(nums, i + 1, target - nums[i]);

    threeSumRes.forEach((item) => {
      item.push(nums[i]);
      res.push(item);
    });

    // 跳过重复元素
    while (i < n - 1 && nums[i] === nums[i + 1]) i++;
  }

  return res;
}
// @lc code=end
