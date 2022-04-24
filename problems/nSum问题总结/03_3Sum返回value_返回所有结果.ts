/**
 * @description 被 threeSum 复用 -- nums 需要是已经升序排序好的数组
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

function threeSum(nums: number[], target: number): number[][] {
  // 先将 nums 升序排序
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const res: number[][] = [];

  /**
   * 遍历数组，复用 twoSum 的逻辑，找出和当前遍历元素之和为 target 的两个元素
   * 找到后加入进去就成了 threeSum 了
   */
  for (let i = 0; i < n; i++) {
    const num = nums[i];

    // 找出和自己互补的两个元素 -- 要从下一个开始找，前面的肯定是不可能的了
    const twoSumRes = twoSum(nums, i + 1, target - num);

    // 将自己和剩下的两个元素合并 合并后加入到结果集中
    twoSumRes.forEach((item) => {
      item.push(num);
      res.push(item);
    });

    // 跳过和 num 重复的数字
    while (i < n - 1 && nums[i] === nums[i + 1]) i++;
  }

  return res;
}

export { threeSum };
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
