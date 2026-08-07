/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 质检员：检查在 board[row][col] 放数字 val (字符串格式) 是否合法
  const isValid = function (row, col, val) {
    // 1. 检查同行
    for (let j = 0; j < 9; j++) {
      if (board[row][j] === val) return false;
    }
    // 2. 检查同列
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === val) return false;
    }
    // 3. 检查 3x3 九宫格
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) return false;
      }
    }
    return true;
  };

  // 回溯主函数：必须返回 Boolean
  const backtrack = function () {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 发现空位，准备试填
        if (board[row][col] === '.') {
          // 尝试放入 '1' 到 '9'
          for (let k = 1; k <= 9; k++) {
            const val = k.toString();

            if (isValid(row, col, val)) {
              // 填入数字
              board[row][col] = val;

              // ☂️ 第一个 Return (接力保护伞)
              // 收到最底层的通关文牒后，立刻将 true 传给上一层，跳过撤销操作！
              if (backtrack()) {
                return true;
              }

              // 回溯：走到死胡同了，擦除痕迹，换个数字试
              board[row][col] = '.';
            }
          }

          // ☠️ 第二个 Return (死亡宣告)
          // 如果 1-9 都试完了还不合法，说明之前的某一步填错了！
          // 立刻向上一层报错 false，让上一层触发回溯去换数字！
          return false;
        }
      }
    }

    // 🏆 第三个 Return (终极通关文牒)
    // 只有当棋盘全满（双重 for 循环毫发无伤走完，没遇到任何 '.'），才会触发！
    return true;
  };

  // 启动回溯
  backtrack();
};
