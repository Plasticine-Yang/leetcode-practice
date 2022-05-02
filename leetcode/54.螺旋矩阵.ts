/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const res: number[] = [];
  let topBound = 0;
  let rightBound = n - 1;
  let bottomBound = m - 1;
  let leftBound = 0;

  while (res.length < m * n) {
    // 上边界从左往右遍历
    if (topBound <= bottomBound) {
      for (let j = leftBound; j <= rightBound; j++) {
        res.push(matrix[topBound][j]);
      }

      topBound++; // 上边界下移
    }

    // 右边界从上往下遍历
    if (rightBound >= leftBound) {
      for (let i = topBound; i <= bottomBound; i++) {
        res.push(matrix[i][rightBound]);
      }

      rightBound--; // 右边界左移
    }

    // 下边界从右往左遍历
    if (bottomBound >= topBound) {
      for (let j = rightBound; j >= leftBound; j--) {
        res.push(matrix[bottomBound][j]);
      }

      bottomBound--; // 下边界上移
    }

    // 左边界从下往上遍历
    if (leftBound <= rightBound) {
      for (let i = bottomBound; i >= topBound; i--) {
        res.push(matrix[i][leftBound]);
      }

      leftBound++; // 左边界右移
    }
  }

  return res;
}
// @lc code=end

const res = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

console.log(res);
