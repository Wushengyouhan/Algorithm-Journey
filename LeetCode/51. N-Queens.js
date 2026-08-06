/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];

  // 1. 初始化空棋盘，全是 '.'
  // ⭐ 使用 Array.from 配合类数组对象创建二维数组，是极其现代且优雅的写法
  const board = Array.from({ length: n }, () => new Array(n).fill('.'));

  // 质检员：检查在 (row, col) 放皇后是否合法
  const isValid = function (row, col) {
    // 检查正上方 (同列)
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    // 检查左上方 (45度对角线)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    // 检查右上方 (135度对角线)
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  };

  const backtrack = function (row) {
    // 1. 终止条件：走完最后一行了（顺利放下了 n 个皇后）
    if (row === n) {
      // 把二维字符数组转化为题目要求的格式：一维字符串数组
      const temp = [];
      for (let i = 0; i < n; i++) {
        temp.push(board[i].join(''));
      }
      res.push(temp);
      return;
    }

    // 2. 单层逻辑：在当前第 row 行，挨个尝试所有的列 col
    for (let col = 0; col < n; col++) {
      // 剪枝：如果不合法，坚决不能放，换下一列尝试
      if (!isValid(row, col)) {
        continue;
      }

      // 做选择：放皇后
      board[row][col] = 'Q';

      // 递归：去下一行放皇后
      backtrack(row + 1);

      // 撤销选择（回溯）：把皇后拿走，恢复成空地
      board[row][col] = '.';
    }
  };

  // 从第 0 行开始放皇后
  backtrack(0);

  return res;
};
