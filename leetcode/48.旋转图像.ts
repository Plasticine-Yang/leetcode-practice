/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  // 1. 沿着主对角线镜像翻转矩阵
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      // 交换 matrix[i][j]
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 2. 逆序每一行
  for (let i = 0; i < m; i++) {
    reverse(matrix[i]);
  }
}

/**
 * @description 逆序一个数组
 * @param nums 数组
 */
function reverse(nums: number[]): void {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

    i++;
    j--;
  }
}
// @lc code=end

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
console.log(matrix);
