/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const res: number[] = new Array(nums.length);

  let i = 0;
  let j = nums.length - 1;
  let k = res.length - 1;

  while (i <= j) {
    const iPow2 = Math.pow(nums[i], 2);
    const jPow2 = Math.pow(nums[j], 2);

    if (iPow2 > jPow2) {
      res[k--] = iPow2;
      i++;
    } else {
      res[k--] = jPow2;
      j--;
    }
  }

  return res;
}
// @lc code=end
