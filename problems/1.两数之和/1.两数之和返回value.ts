// 返回值而不是下标 -- [2,7,11,15], target = 9 ==> [2, 7]

/**
 * @description 使用双指针
 */
function twoSum(nums: number[], target: number): number[] {
  let lo = 0,
    hi = nums.length - 1;

  while (lo < hi) {
    const sum = nums[lo] + nums[hi];

    if (sum < target) lo++;
    else if (sum > target) hi--;
    else return [nums[lo], nums[hi]];
  }

  return [-1, -1];
}

export { twoSum };
