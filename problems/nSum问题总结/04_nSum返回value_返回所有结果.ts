/**
 * nSum 问题
 * @param nums nums
 * @param n 几 sum 问题
 * @param target 目标值
 * @param start 从哪个下标开始遍历
 */
function nSumTarget(
  nums: number[],
  n: number,
  target: number,
  start: number
): number[][] {
  const res: number[][] = [];

  // 至少是 2Sum 问题，且数组元素个数不能少于 n
  if (n < 2 || nums.length < n) return res;

  if (n === 2) {
    // base case
    let lo = start;
    let hi = nums.length - 1;

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
  } else {
    // 递归调用 nSumTarget
    for (let i = start; i < nums.length; i++) {
      const sub = nSumTarget(nums, n - 1, target - nums[i], i + 1);

      sub.forEach((item) => {
        item.push(nums[i]);
        res.push(item);
      });

      while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
    }
  }

  return res;
}

function nSum(nums: number[], n: number, target: number): number[][] {
  nums.sort((a, b) => a - b);

  return nSumTarget(nums, n, target, 0);
}

export { nSum };
