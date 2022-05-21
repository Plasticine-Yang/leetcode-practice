/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start

function solveNQueens(n: number): string[][] {
  // 初始化棋盘
  const board = Array.from({ length: n }).map((row) => '.'.repeat(n));

  const res: string[][] = [];
  // 回溯
  backtrack(board, 0, res);

  return res;
}

/**
 * 选择 -- 棋盘的每一行中的所有列
 * 路径 -- 棋盘中小于棋盘总行数的那些已经放了棋子的行
 * 结束条件 -- 遍历到超出棋盘总行数时停止
 *
 * @param board 棋盘
 * @param row 当前决策树所处在第几行
 */
function backtrack(board: string[], row: number, res: string[][]) {
  // base case
  if (row === board.length) {
    res.push([...board]);
    return;
  }

  // 遍历选择列表
  const rowStringList = board[row].split('');
  const n = rowStringList.length;
  for (let col = 0; col < n; col++) {
    // 剪枝
    if (!isValid(board, row, col)) continue;
    // 做选择
    rowStringList[col] = 'Q';
    board[row] = rowStringList.join('');
    // 回溯 -- 进入下一层决策树
    backtrack(board, row + 1, res);
    // 撤销选择
    rowStringList[col] = '.';
    board[row] = rowStringList.join('');
  }
}

/**
 * @description 检查 board[row][col] 是否可以放皇后
 * @param board 棋盘
 * @param row 第几行
 * @param col 第几列
 */
function isValid(board: string[], row: number, col: number): boolean {
  const n = board.length;

  // 检查 col 列上是否已有皇后
  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') return false;
  }

  // 检查左上方是否有皇后 -- 注意：是左上方的整个方向上
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }

  // 检查右上方是否有皇后
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }

  return true;
}
// @lc code=end
export {};

const ans = solveNQueens(4);
console.log(ans);
