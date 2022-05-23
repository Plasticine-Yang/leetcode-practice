/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start
function totalNQueens(n: number): number {
  let res = 0;
  // 初始化棋盘
  const board = new Array<string>(n).fill('.'.repeat(n));
  backtrack(board, 0);

  /**
   * @description 回溯
   * @param board 棋盘
   * @param row 当前处在第几行
   * @param col 当前处在第几列
   */
  function backtrack(board: string[], row: number) {
    // base case
    if (row === board.length) {
      res++;
      return;
    }
    const rowStrArr = board[row].split('');

    // 遍历选择
    for (let col = 0; col < rowStrArr.length; col++) {
      // 剪枝
      if (!isValid(board, row, col)) {
        continue;
      }
      // 做选择
      rowStrArr[col] = 'Q';
      board[row] = rowStrArr.join('');

      // 进入下一层决策树
      backtrack(board, row + 1);

      // 撤销选择
      rowStrArr[col] = '.';
      board[row] = rowStrArr.join('');
    }
  }

  function isValid(board: string[], row: number, col: number): boolean {
    // 当前列上如果有皇后则不符合要求
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === 'Q') return false;
    }

    // 左上方有皇后则不符合要求
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    // 右上方有皇后则不符合要求
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }
  return res;
}

// @lc code=end

const ans = totalNQueens(1);
console.log(ans);

export {};
