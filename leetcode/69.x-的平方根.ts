/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  let ans = -1;

  while (left <= right) {
    // 需要使用 左闭右闭 的边界 -- 因为 1^2 === 1
    const mid = left + Math.floor((right - left) / 2);
    const num = mid * mid;

    if (num <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}
// @lc code=end
