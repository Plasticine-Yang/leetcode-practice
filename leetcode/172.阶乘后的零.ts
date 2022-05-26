/*
 * @lc app=leetcode.cn id=172 lang=typescript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
function trailingZeroes(n: number): number {
  let res = 0;
  while (n > 0) {
    const temp = Math.floor(n / 5);
    res += temp;
    n = temp;
  }

  return res;
}

// @lc code=end

const res = trailingZeroes(10);
console.log(res);

export {};
