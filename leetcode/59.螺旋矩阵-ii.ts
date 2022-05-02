/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  // 初始化结果矩阵
  const res: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n).fill(0);
  }

  // 填入矩阵中的数字
  let num = 1;
  // 四个边界
  let topBound = 0;
  let rightBound = n - 1;
  let bottomBound = n - 1;
  let leftBound = 0;

  while (num <= n * n) {
    // 上边界从左往右填充
    if (topBound <= bottomBound) {
      for (let j = leftBound; j <= rightBound; j++) {
        res[topBound][j] = num++;
      }

      topBound++; // 上边界下移
    }

    // 右边界从上往下填充
    if (rightBound >= leftBound) {
      for (let i = topBound; i <= bottomBound; i++) {
        res[i][rightBound] = num++;
      }

      rightBound--; // 右边界左移
    }

    // 下边界从右往左填充
    if (bottomBound >= topBound) {
      for (let j = rightBound; j >= leftBound; j--) {
        res[bottomBound][j] = num++;
      }

      bottomBound--; // 下边界上移
    }

    // 左边界从下往上填充
    if (leftBound <= rightBound) {
      for (let i = bottomBound; i >= topBound; i--) {
        res[i][leftBound] = num++;
      }

      leftBound++; // 左边界右移
    }
  }

  return res;
}
// @lc code=end

const res = generateMatrix(3);
console.log(res);
