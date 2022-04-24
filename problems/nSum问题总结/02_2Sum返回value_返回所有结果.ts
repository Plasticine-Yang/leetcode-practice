/**
 * @description 2Sum 返回所有符合的结果
 */
function twoSum(nums: number[], target: number): number[][] {
  // 先将 nums 升序排序
  nums.sort((a, b) => a - b);

  let lo = 0;
  let hi = nums.length - 1;

  const res: number[][] = [];

  while (lo < hi) {
    const left = nums[lo];
    const right = nums[hi];
    const sum = left + right;

    if (sum < target) {
      // 核心在这里 -- 跳过重复元素
      while (lo < hi && nums[lo] === left) lo++;
    } else if (sum > target) {
      // 核心在这里 -- 跳过重复元素
      while (lo < hi && nums[hi] === right) hi--;
    } else {
      res.push([nums[lo], nums[hi]]);

      // 核心在这里 -- 跳过重复元素
      while (lo < hi && nums[lo] === left) lo++;
      while (lo < hi && nums[hi] === right) hi--;
    }
  }

  return res;
}

export { twoSum };
