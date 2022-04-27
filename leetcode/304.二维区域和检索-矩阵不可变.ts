/*
 * @lc app=leetcode.cn id=304 lang=typescript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
class NumMatrix {
  private preSums: number[][];

  constructor(matrix: number[][]) {
    // 初始化前缀和矩阵
    //        (i, j) = sum(i, j) - (i-1, j) - (i, j-1) + (i-1, j-1)
    // --> sum(i, j) = (i, j) + (i-1, j) + (i, j-1) - (i-1, j-1)
    const m = matrix.length;
    const n = matrix[0].length;

    this.preSums = new Array(m + 1);
    for (let i = 0; i < this.preSums.length; i++)
      this.preSums[i] = new Array(n + 1).fill(0);

    // 生成前缀和矩阵
    for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        this.preSums[i][j] =
          matrix[i - 1][j - 1] +
          this.preSums[i - 1][j] +
          this.preSums[i][j - 1] -
          this.preSums[i - 1][j - 1];
      }
    }
  }

  /**
   * @description sum(i, j) = preSum(i, j) - preSum(i-1, j) - preSum(i, j-1) + preSum(i-1, j-1)
   */
  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.preSums[row2 + 1][col2 + 1] -
      this.preSums[row1][col2 + 1] -
      this.preSums[row2 + 1][col1] +
      this.preSums[row1][col1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
