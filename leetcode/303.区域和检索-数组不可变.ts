/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
  private preSums: number[];

  constructor(nums: number[]) {
    // 构造前缀和数组
    this.preSums = new Array(nums.length + 1).fill(0);
    // sums    = [1, 2, 3, 4, 5,  6]
    // presumS = [0, 1, 3, 6, 10, 15, 21]
    // 求 [2, 4] 的区域和 -- preSums[5] - preSums[2]
    for (let i = 1; i < this.preSums.length; i++) {
      this.preSums[i] = this.preSums[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSums[right + 1] - this.preSums[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
