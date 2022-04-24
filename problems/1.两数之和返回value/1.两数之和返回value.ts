// 返回值而不是下标 -- [2,7,11,15], target = 9 ==> [2, 7]

/**
 * @description 使用双指针
 */
function twoSum(nums: number[], target: number): number[] {
  // 一定要先升序排序！！！
  nums.sort((a, b) => a - b); // 必须显式写 compareFn，否则是按 ASCII 升序排序

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
