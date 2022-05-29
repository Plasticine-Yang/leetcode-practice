/*
 * @lc app=leetcode.cn id=85 lang=typescript
 *
 * [85] 最大矩形
 */

// function maximalRectangle(matrix: string[][]): number {
//   const m = matrix.length;
//   if (m === 0) return 0;
//   const n = matrix[0].length;
//   // left 表示第 i 行 第 j 列的左边(包括自己)有几个 1
//   const left: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

//   // 初始化 left 矩阵
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === '1') {
//         left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
//       }
//     }
//   }

//   let res = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === '0') continue;
//       // 一开始只有一行 宽度就是 left[i][j] 面积则是 1 * width
//       let width = left[i][j];
//       let area = width;

//       // 从第 i 行的上一行开始往上遍历
//       for (let k = i - 1; k >= 0; k--) {
//         width = Math.min(left[k][j], width);
//         area = Math.max((i - k + 1) * width, area);
//       }
//       res = Math.max(res, area);
//     }
//   }

//   return res;
// }
// @lc code=start
/**
 * @description 单调栈解法
 */
function maximalRectangle(matrix: string[][]): number {
  const m = matrix.length;
  if (m === 0) return 0;
  const n = matrix[0].length;
  const left: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let res = 0;

  // 初始化 left 矩阵
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }

  // 对每一列使用单调栈计算矩形面积
  let stack: number[] = [];
  for (let j = 0; j < n; j++) {
    // 当前列的上下界行
    const top: number[] = new Array(m);
    const bottom: number[] = new Array(m);

    // 单调栈计算上界行 -- 从上往下找 下一个 left 更小行
    for (let i = 0; i < m; i++) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        stack.pop();
      }
      top[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(i);
    }

    // 单调栈计算下界行 -- 从下往上找 下一个 left 更小行
    stack = [];
    for (let i = m - 1; i >= 0; i--) {
      while (stack.length && left[stack[stack.length - 1]][j] >= left[i][j]) {
        stack.pop();
      }
      bottom[i] = stack.length === 0 ? m : stack[stack.length - 1];
      stack.push(i);
    }

    // 更新 res
    for (let i = 0; i < m; i++) {
      const height = bottom[i] - top[i] - 1;
      const area = height * left[i][j];
      res = Math.max(area, res);
    }
  }

  return res;
}
// @lc code=end

const ans = maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);
console.log(ans);

export {};
