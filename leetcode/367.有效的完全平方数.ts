/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const sqrt = mid * mid;

    if (sqrt < num) {
      left = mid + 1;
    } else if (sqrt > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}
// @lc code=end
