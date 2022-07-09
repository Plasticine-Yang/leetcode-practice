/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/**
 * 使用并查集的思路
 *
 * 初始化一个大小为 m * n + 1 的并查集，多出来的 1 用来存放虚拟节点 dummy
 * 将四条边界上的 O 与 dummy 连通
 * 再将内部与边界上的 O 相邻的 O 与 dummy 连通
 * 最后只需要遍历整个棋盘 将没有与 dummy 连通的 O 变成 X 即可
 */
function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0].length;
  // 1. 初始化一个大小为 m * n + 1 的并查集
  const uf = new UF(m * n + 1);
  const dummy = m * n;

  // 2. 遍历四条边界 将 O 与 dummy 连通

  // 由于并查集底层是一维数组 而棋盘是二维数组
  // 所以要将二维数组的下标映射到一维数组上
  // 映射函数：(x, y) => y * n + x
  // 这里只遍历左右两列 x === 0 or n - 1, y === i

  // 2.1 将左右两列上的 O 与 dummy 连通
  for (let i = 0; i < m; i++) {
    const left = board[i][0];
    const right = board[i][n - 1];

    if (left === 'O') {
      // 坐标为 (0, i)
      uf.union(i * n, dummy);
    }
    if (right === 'O') {
      // 坐标为 (n - 1, i)
      uf.union(i * n + (n - 1), dummy);
    }
  }
  // 2.2 将上下两行上的 O 与 dummy 连通
  for (let j = 0; j < n; j++) {
    const top = board[0][j];
    const bottom = board[m - 1][j];

    if (top === 'O') {
      // 坐标为 (j, 0)
      uf.union(j, dummy);
    }

    if (bottom === 'O') {
      // 坐标为 (j, m - 1)
      uf.union((m - 1) * n + j, dummy);
    }
  }

  // 3. 遍历边界内的棋盘元素，找到与边界上的 O 相邻的 O 将它们与 dummy 连通
  // 方向数组 d(direction) 用于上下左右搜索
  const d: number[][] = [
    // 搜索上方
    [-1, 0],
    // 搜索下方
    [1, 0],
    // 搜索左方
    [0, -1],
    // 搜索右方
    [0, 1],
  ];
  // 遍历边界内的棋盘元素
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'O') {
        // 遇到 O 了 -- 将其和上下左右的 O 连通
        for (let k = 0; k < d.length; k++) {
          // 通过方向数组遍历 board[i][j] 四个方向上的坐标
          const row = i + d[k][0];
          const col = j + d[k][1];
          if (board[row][col] === 'O') {
            // 如果四个方向上任意一个方向有 O 则将其连通
            uf.union(i * n + j, row * n + col);
          }
        }
      }
    }
  }

  // 4. 再次遍历整个棋盘边界内的元素，所有不和 dummy 连通的都需要变成 X
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!uf.connected(i * n + j, dummy)) {
        board[i][j] = 'X';
      }
    }
  }
}

class UF {
  private count: number;
  private parent: number[];

  constructor(n: number) {
    this.count = n;
    this.parent = new Array(n).fill(0).map((_, idx) => idx);
  }

  private findRoot(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.findRoot(this.parent[x]);
    }

    return this.parent[x];
  }

  public union(p: number, q: number): void {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);

    if (rootP === rootQ) return;

    this.parent[rootP] = rootQ;
    this.count--;
  }

  public connected(p: number, q: number): boolean {
    const rootP = this.findRoot(p);
    const rootQ = this.findRoot(q);

    return rootP === rootQ;
  }
}
// @lc code=end

const board = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
];

solve(board);

console.log(board);

export {};
