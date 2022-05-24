/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const m = 9,
    n = 9;
  backtrack(board, 0, 0);

  function backtrack(board: string[][], row: number, col: number): boolean {
    if (row === m) {
      // 找到可行解触发 base case
      return true;
    }
    if (col === n) {
      // 穷举到最后一列时跳到下一行
      return backtrack(board, row + 1, 0);
    }
    if (board[row][col] !== '.') {
      // 棋盘上预设好的数字不需要处理
      return backtrack(board, row, col + 1);
    }

    for (let ch = 1; ch <= 9; ch++) {
      // TODO 剪枝
      if (!isValid(board, row, col, ch.toString())) continue;
      // 做选择
      board[row][col] = ch.toString();
      // 进入下一层 -- 找到一个可行解就退出
      if (backtrack(board, row, col + 1)) {
        return true;
      }
      // 撤销选择
      board[row][col] = '.';
    }

    // 穷举完 1~9 也没有可行解
    return false;
  }

  function isValid(
    board: string[][],
    row: number,
    col: number,
    ch: string
  ): boolean {
    // 行是否重复
    for (let j = 0; j < n; j++) {
      if (board[row][j] === ch) return false;
    }

    // 列是否重复
    for (let i = 0; i < m; i++) {
      if (board[i][col] === ch) return false;
    }

    // 3 * 3 方格内是否重复
    for (let i = 0; i < m; i++) {
      if (
        // (row / 3) * 3 得到当前行处在第几个方块的行
        // 加上 i / 3 是为了得到当前行在所在方块中的行偏移量
        // 列也是类似的 只是偏移量变成了 i % 3
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(col / 3) * 3 + (i % 3)
        ] === ch
      )
        return false;
    }
    return true;
  }
}
// @lc code=end
const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
solveSudoku(board);

console.log(board);

export {};
